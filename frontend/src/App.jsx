import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <hr />
      <Project />
    </div>
  );
};

export default App;
