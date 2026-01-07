import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Project />
      <Skills/>

    </div>
  );
};

export default App;
