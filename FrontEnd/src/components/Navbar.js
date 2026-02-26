import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={{ padding: 15, background: "#222", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: 15, color: "#fff" }}>
        Dashboard
      </Link>
      <Link to="/register" style={{ marginRight: 15, color: "#fff" }}>
        Register
      </Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;