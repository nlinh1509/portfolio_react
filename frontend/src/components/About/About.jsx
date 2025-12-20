import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <h1>Le Vo Nhat Linh</h1>
        <h1>
          Hi, I'm <span>a Developer</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          necessitatibus fugiat illum, minima facere quibusdam possimus dolores
          in hic nostrum! lo
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem culpa delectus quod neque esse, architecto natus animi
          repellat rerum? Doloremque deserunt repellat culpa voluptatem
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
        <button>Download my CV</button>
      </div>

      <div className="avatar">
        <img src={assets.avatar} alt="nlinh" />
      </div>
    </div>
  );
};

export default About;
