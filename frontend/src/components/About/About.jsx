import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <h1>Le Vo Nhat Linh</h1>
        <h2>
          Hi, I'm <span>a Frontend / Full-stack Developer</span>
        </h2>
        <p>Final-year student with a solid foundation in the MERN Stack.</p>
        <p>
          I am seeking a Frontend/Fullstack Internship to apply my skills to
          real-world projects. With a proactive mindset, I am ready to adapt
          quickly, tackle challenges, and always eager to learn.
        </p>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/levonhatlinh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/nlinh1509"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="mailto:levonhatlinh.work@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        {/* <button>Download my CV</button> */}
      </div>

      <div className="avatar">
        <img src={assets.avatar} alt="nlinh" />
      </div>
    </div>
  );
};

export default About;
