import React from "react";
import "./Project.css";
import { projectsData } from "../../assets/assets";

const Project = () => {
  const webProjects = projectsData.filter((project)=> project.category === "Web");
  const mobileProjects = projectsData.filter((project) => project.category === "Mobile");
  
  return (



    
  );
};

export default Project;
