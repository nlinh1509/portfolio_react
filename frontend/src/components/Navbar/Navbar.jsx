import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [item, setItems] = useState("about");
  return (
    <div className="navbar">
      <Link to="/">le vo nhat linh</Link>

      <ul className="navbar-right">
        <li
          onClick={() => setItems("about")}
          className={item === "about" ? "active" : "no-active"}
        >
          <a href="#">About</a>
        </li>
        <li
          onClick={() => setItems("project")}
          className={item === "project" ? "active" : "no-active"}
        >
          <a href="#">Project</a>
        </li>
        <li
          onClick={() => setItems("skills")}
          className={item === "skills" ? "active" : "no-active"}
        >
          <a href="#">Skills</a>
        </li>
        <li
          onClick={() => setItems("education")}
          className={item === "education" ? "active" : "no-active"}
        >
          <a href="#">Education</a>
        </li>
        <li
          onClick={() => setItems("experience")}
          className={item === "experience" ? "active" : "no-active"}
        >
          <a href="#">Experience</a>
        </li>
        <li
          onClick={() => setItems("contact")}
          className={item === "contact" ? "active" : "no-active"}
        >
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
