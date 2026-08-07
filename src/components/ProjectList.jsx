import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
    return (
      <div className="project-list">
        {projects.map((portfolioproject) => (
          <ProjectCard key={portfolioproject.id} project={portfolioproject} />
        ))}
      </div>
    );
}

export default ProjectList