import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <main>
      <h2>Project Details</h2>
      <p>Project ID: {id}</p>
    </main>
  );
}

export default ProjectDetails;
