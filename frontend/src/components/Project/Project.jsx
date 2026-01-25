import React from "react";
import "./Project.css";
import { projectsData } from "../../assets/assets";

const Project = () => {
  const handleProjectClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Link for this project is updating...");
    }
  };

  return (
    <div className="project">
      <div id="project" className="project-header">
        <h1>My Projects</h1>
        <p>Discover my latest work & experiments.</p>
      </div>

      <div className="project-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="project-img-wrapper">
              <div className="glow-effect"></div>
              <img
                className={project.name}
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-info">
              <div className="info-text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div className="tech-stack">
                {project.technologies?.map((techUrl, idx) => (
                  <div key={idx} className="tech-pill">
                    <img src={techUrl} alt="tech" />
                  </div>
                ))}
              </div>

              <div className="tech-stack">
                <p>{project.technologies}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
