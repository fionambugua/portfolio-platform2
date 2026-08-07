import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!title || !description) return;

    addProject(title, description);

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h2>Add New Project</h2>

      <label>Project Title</label>
      <input
        type="text"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />

      <label>Description</label>
      <textarea
        rows="4"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
      ></textarea>

      <button>Add Project</button>
    </form>
  );
}

export default AddProjectForm;