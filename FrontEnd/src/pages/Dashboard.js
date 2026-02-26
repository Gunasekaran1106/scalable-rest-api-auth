import React, { useState, useEffect } from "react";
import API from "../api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const fetchTasks = async () => {
  try {
    const res = await API.get("tasks/");
    setTasks(res.data);
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }
};
  const createOrUpdateTask = async () => {
    try {
      if (editId) {
        await API.put(`tasks/${editId}/`, form);
        alert("Task Updated");
        setEditId(null);
      } else {
        await API.post("tasks/", form);
        alert("Task Created");
      }

      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      alert("Error saving task");
    }
  };

  const editTask = (task) => {
    setForm({
      title: task.title,
      description: task.description,
    });
    setEditId(task.id);
  };

  const deleteTask = async (id) => {
    await API.delete(`tasks/${id}/`);
    fetchTasks();
  };

  // 🔥 NEW: Toggle Status
  const toggleStatus = async (task) => {
    const newStatus = task.status === "pending" ? "completed" : "pending";

    await API.put(`tasks/${task.id}/`, {
      title: task.title,
      description: task.description,
      status: newStatus,
    });

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h2>Dashboard</h2>

      <h3>{editId ? "Edit Task" : "Create Task"}</h3>

      <input
        name="title"
        value={form.title}
        placeholder="Title"
        onChange={handleChange}
      /><br /><br />

      <input
        name="description"
        value={form.description}
        placeholder="Description"
        onChange={handleChange}
      /><br /><br />

      <button onClick={createOrUpdateTask}>
        {editId ? "Update Task" : "Create Task"}
      </button>

      <hr />

      <h3>Your Tasks</h3>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 15 }}>
            <strong>{task.title}</strong>
            <br />
            {task.description}
            <br />

            <span>
              Status:{" "}
              <b style={{ color: task.status === "completed" ? "green" : "orange" }}>
                {task.status}
              </b>
            </span>
            <br /><br />

            <button onClick={() => toggleStatus(task)}>
              Mark as {task.status === "pending" ? "Completed" : "Pending"}
            </button>

            <button onClick={() => editTask(task)} style={{ marginLeft: 10 }}>
              Edit
            </button>

            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;