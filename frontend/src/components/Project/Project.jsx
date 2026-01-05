import React from "react";
import "./Project.css";
import { projectsData } from "../../assets/assets";

const Project = () => {
  return (
    <div className="project">
      <div className="header-section">
        <h1>Project</h1>
        <p>Here are some of my favorite projects.</p>
      </div>

      <div className="project-list">
        {projectsData.map((project, index) => {
          // Logic để xác định kiểu hiển thị dựa trên Category
          let cardClass = "project-card";
          
          if (project.category === "Web") {
            cardClass += " wide"; // Thêm class wide cho Web
          } else if (project.category === "Mobile") {
            cardClass += " tall"; // Thêm class tall cho Mobile
          }

          return (
            <div key={index} className={cardClass}>
              <div className="card-img">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="card-info">
                <span className="category-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Nút xem chi tiết giống trong hình */}
                <button className="view-btn">View Case Study</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;