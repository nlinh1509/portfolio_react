import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [item, setItems] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? "navbar-scrolled" : "navbar-top"}>
      <Link className="name" to="/">
        Le Vo Nhat Linh
      </Link>

      <ul className="navbar-center">
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
          <a href="#project">Project</a>
        </li>
        <li
          onClick={() => setItems("skills")}
          className={item === "skills" ? "active" : "no-active"}
        >
          <a href="#skills">Skills</a>
        </li>
        {/* <li
          onClick={() => setItems("education")}
          className={item === "education" ? "active" : "no-active"}
        >
          <a href="#">Education</a>
        </li> */}
        {/*         
        <li
          onClick={() => setItems("experience")}
          className={item === "experience" ? "active" : "no-active"}
        >
          <a href="#">Experience</a>
        </li> */}
      </ul>

      <a
        href="/Le Vo Nhat Linh_FE intern.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download"
      >
        My resume
      </a>
    </div>
  );
};

export default Navbar;
