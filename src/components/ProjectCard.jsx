import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <span>{project.category}</span>

        <Link to={`/project/${project.id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
