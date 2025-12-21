import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <h1>My porject</h1>
      <div className="project-card">
        <div className="project_content">
          <h2 className="project-title">EcoTrack - Waste Sorting App</h2>
          <p className="project-overview">
            EcoTrack is a cross-platform mobile app that leverages AI to assist
            users in classifying waste accurately. Through gamification and
            eco-friendly incentives, the app promotes sustainable waste
            management and environmental awareness.
          </p>
          <ul className="project-tect">
            <li>
              <i class="fa-brands fa-flutter"></i>
            </li>
            <li>
              <i class="fa-brands fa-dart-lang"></i>
            </li>
            <li>
              <i class="fa-brands fa-firebase"></i>
            </li>
          </ul>
        </div>
        <img className="phone" src="../../../public/iphone.png" alt="" />
      </div>

      <div className="project2"></div>
      <div className="project3"></div>
    </div>
  );
};
import "./Project.css";

export default Project;
