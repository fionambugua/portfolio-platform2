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
      title: "E-commerce Store",
      description:
        "An online shopping interface with product listings, filtering, and a shopping cart.",
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "A productivity application that allows users to create, edit, complete, and delete tasks.",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A React application that displays real-time weather information using a weather API.",
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

  const filteredProjects = projects.filter((portfolioproject) =>
    portfolioproject.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <Header />
      <Hero />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList projects={filteredProjects} />
      <AddProjectForm addProject={addProject} />
      <Footer />
    </div>
  );
}

export default App;