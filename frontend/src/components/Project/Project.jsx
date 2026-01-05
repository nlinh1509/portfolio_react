import React from "react";
import "./Project.css";
import { projectsData } from "../../assets/assets";

const Project = () => {
  const webProjects = projectsData.filter(
    (project) => project.category === "Web"
  );
  const mobileProjects = projectsData.filter(
    (project) => project.category === "Mobile"
  );

  return (
    <div className="project">
      <div className="project-header">
        <h1>My project</h1>
        <p>Here show my projects</p>
      </div>

      <div className="project-container">
        <div className="project-left">
          {webProjects.map((project, index) => (
            <div key={index} className="project-web">
              <div className="project-web-img">
                <img src={project.image} alt="" />
              </div>
              <div className="project-web-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="project-right">
          {mobileProjects.map((project, index) => (
            <div key={index} className="project-mobile">
              <div className="project-mobile-img">
                <img src={project.image} alt="" />
              </div>
              <div className="project-mobile-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
