import React from "react";
import { deleteTask, updateTask } from "../services/api";

function TaskList({ tasks, refreshTasks }) {

  const toggleStatus = async (task) => {

    const newStatus =
      task.status === "Pending"
        ? "Completed"
        : "Pending";

    await updateTask(task._id, { status: newStatus });

    refreshTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    refreshTasks();
  };

  return (
    <div className="card shadow-sm p-4 bg-white border-0">
      <h4 className="mb-3 text-secondary">Task List</h4>
      <div className="table-responsive">
        <table className="table align-middle table-hover">
          <thead className="table-light">
            <tr>
              <th style={{minWidth: 120, maxWidth: 120}}>Title</th>
              <th>Description</th>
              <th style={{minWidth: 120, maxWidth: 120, textAlign: 'center'}}>Status</th>
              <th>Date</th>
              <th style={{minWidth: 180, textAlign: 'center'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="fw-bold">{task.title}</td>
                <td>{task.description}</td>
                <td style={{minWidth: 120, maxWidth: 120, textAlign: 'center'}}>
                  <span
                    className={
                      task.status === "Completed"
                        ? "badge bg-success d-inline-block w-100 text-center fw-bold"
                        : "badge bg-warning text-dark d-inline-block w-100 text-center fw-bold"
                    }
                    style={{minWidth: 100, maxWidth: 120}}
                  >
                    {task.status}
                  </span>
                </td>
                <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                <td style={{whiteSpace: 'nowrap', minWidth: 180, textAlign: 'center'}}>
                  <button
                    className="btn btn-outline-success btn-sm me-2"
                    onClick={() => toggleStatus(task)}
                    style={{minWidth: 90}}
                  >
                    <i className="bi bi-check-circle me-1"></i>
                    {task.status === "Completed" ? "Mark Pending" : "Complete"}
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeTask(task._id)}
                    style={{minWidth: 70}}
                  >
                    <i className="bi bi-trash me-1"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;