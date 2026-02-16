import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">HireFlow</Link>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {user ? (
          <>
            <NavLink to="/applications" onClick={() => setMenuOpen(false)}>
              Applications
            </NavLink>

            <NavLink to="/analytics" onClick={() => setMenuOpen(false)}>
              Analytics
            </NavLink>

            <span className="user-name">{user.name}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>

            <NavLink to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </NavLink>
          </>
        )}
      </div>

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
