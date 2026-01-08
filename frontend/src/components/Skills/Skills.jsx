import React from "react";
import "./Skills.css";
import { techLogo } from "../../assets/assets";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-header">
        <h1>Skills</h1>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>

      <div className="skills-grid">
        {techLogo.map((skill, index) => (
          <div key={index} className="skills-items">
            <div className="icon">
              <img
                src={skill.url}
                alt={skill.name}
                className={skill.style || ""}
              />
            </div>
            <p className="skill-name"> {skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
