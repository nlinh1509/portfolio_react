import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [item, setItems] = useState("about");

  return (
    // {scrolled ? "navbar-scrolled" : "navbar-top"}
    <div className="navbar">
      <Link className="name" to="/">
        le vo nhat linh
      </Link>

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
      </ul>

      <button>Contact me</button>
    </div>
  );
};

export default Navbar;
