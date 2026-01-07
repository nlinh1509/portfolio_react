import React from "react";
import "./Project.css";
import { projectsData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Project = () => {
  const webProjects = projectsData.filter(
    (project) => project.category === "Web"
  );
  const mobileProjects = projectsData.filter(
    (project) => project.category === "Mobile"
  );

  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Link for this project is updating...");
    }
  };

  return (
    <div id="project" className="project">
      <div className="project-header">
        <h1>My project</h1>
        <p>Here show my projects</p>
      </div>

      <div className="project-container">
        <div className="project-left">
          {webProjects.map((project, index) => (
            <div
              key={index}
              className="project-web"
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-web-img">
                <img src={project.image} alt="" />
              </div>
              <div className="project-web-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies?.map((tech, index) => (
                    <i key={index} className={tech}></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="project-right">
          {mobileProjects.map((project, index) => (
            <div
              key={index}
              className="project-mobile"
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-mobile-img">
                <img src={project.image} alt="" />
              </div>
              <div className="project-mobile-info">
                <h2>
                  EcoTrack
                  {/* <br /> */}
                  {/* <span>Waste Sorting App</span> */}
                </h2>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies?.map((tech, index) => (
                    <i key={index} className={tech}></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
