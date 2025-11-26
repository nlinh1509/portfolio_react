import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about">
      <div className="avatar">
        <img src={assets.avatar} alt="nlinh" />
      </div>

      <div className="content">
        <p>I'm</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          necessitatibus fugiat illum, minima facere quibusdam possimus dolores
          in hic nostrum!
        </p>
        <div className="social">
          <a href="https://www.linkedin.com/in/levonhatlinh/" target="_blank">
            <img src={assets.linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/nlinh1509" target="_blank">
            <img src={assets.github} alt="github" />
          </a>
          <a href="mailto:levonhatlinh.work@gmail.com" target="_blank">
            <img src={assets.mail} alt="mail" />
          </a>
        </div>
        <button>Download my CV</button>
      </div>
    </div>
  );
};

export default About;
