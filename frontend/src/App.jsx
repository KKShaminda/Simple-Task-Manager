import React, { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { getTasks } from "./services/api";

function App() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks;
  }, []);

  return (
    <div className="d-flex min-vh-100 w-100 align-items-center justify-content-center" style={{background: '#f8f9fa'}}>
      <div className="w-100 px-2">
        <h2 className="text-center mb-4 display-5 fw-bold text-primary">
          Task Manager
        </h2>
        <TaskForm refreshTasks={fetchTasks} />
        <TaskList
          tasks={tasks}
          refreshTasks={fetchTasks}
        />
      </div>
    </div>
  );
}

export default App;