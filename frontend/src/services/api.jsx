import axios from "axios";

const API = "http://localhost:5000/api/tasks";

export const getTasks = () => axios.get(`${API}/tasks`);

export const createTask = (task) => axios.post(`${API}/tasks`, task);

export const updateTask = (id, task) => axios.put(`${API}/tasks/${id}`, task);

export const deleteTask = (id) => axios.delete(`${API}/tasks/${id}`);