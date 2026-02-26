import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      await API.post("users/register/", form);
      alert("Registered Successfully");
      navigate("/");
    } catch (err) {
  console.log(err.response?.data);
  alert(JSON.stringify(err.response?.data));
}
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br /><br />

      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select><br /><br />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;