import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

import projectData from "./data/projects";

function App() {
  const [projects, setProjects] = useState(projectData);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home projects={projects} setProjects={setProjects} />}
      />

      <Route
        path="/project/:id"
        element={<ProjectDetails projects={projects} />}
      />
    </Routes>
  );
}

export default App;
