import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Restaurant Website",
      description: "A website for a local restaurant.",
    },
    {
      id: 2,
      title: "Movie App",
      description: "Displays trending movies.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio.",
    },
  ]);

  const [search, setSearch] = useState("");

  function addProject(title, description) {
    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <Header />
      <Hero />
      <AddProjectForm addProject={addProject} />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList projects={filteredProjects} />
      <Footer />
    </div>
  );
}

export default App;