// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Love in Seven Days</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rose-day">Rose Day</Link></li>
        <li><Link to="/propose-day">Propose Day</Link></li>
        <li><Link to="/chocolate-day">Chocolate Day</Link></li>
        <li><Link to="/teddy-day">Teddy Day</Link></li>
        <li><Link to="/promise-day">Promise Day</Link></li>
        <li><Link to="/hug-day">Hug Day</Link></li>
        <li><Link to="/kiss-day">Kiss Day</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
