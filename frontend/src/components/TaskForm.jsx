import React, { useState } from "react";
import { createTask } from "../services/api";

function TaskForm({ refreshTasks }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    await createTask({ title, description });

    setTitle("");
    setDescription("");

    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow-sm p-4 mb-4 bg-light border-0">
      <h4 className="mb-3 text-primary">Add New Task</h4>
      <div className="mb-3">
        <input
          className="form-control form-control-lg"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>
      <button className="btn btn-primary btn-lg w-100">
        <i className="bi bi-plus-circle me-2"></i>Add Task
      </button>
    </form>
  );
}

export default TaskForm;