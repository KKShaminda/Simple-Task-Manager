import React, { useState, useEffect } from "react";
import { updateTask, getTasks } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function TaskEdit({ refreshTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", status: "Pending" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await getTasks();
      const found = res.data.find((t) => t._id === id);
      if (found) setTask({ title: found.title, description: found.description, status: found.status || "Pending" });
      setLoading(false);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    if (refreshTasks) refreshTasks();
    navigate("/");
  };

  const handleClose = () => {
    if (refreshTasks) refreshTasks();
    navigate("/");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.4)",
      zIndex: 1050,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="card p-4" style={{minWidth: 350, maxWidth: 500, width: "100%", position: "relative"}}>
        <button type="button" className="btn-close position-absolute end-0 top-0 m-3" aria-label="Close" onClick={handleClose}></button>
        <h3 className="mb-3">Edit Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Task Title"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Description"
              rows={3}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button className="btn btn-primary w-100">Update Task</button>
        </form>
      </div>
    </div>
  );
}

export default TaskEdit;
