import ProjectCard from "./ProjectCard";
import "../styles/ProjectList.css";

function ProjectList({ projects }) {
  return (
    <section id="projects" className="project-list">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
