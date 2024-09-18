import axios from "./axios";

export const getTasksRequest = () => {
  return axios.get("/tasks");
};
export const getTaskRequest = (id) => {
  return axios.get(`/tasks/${id}`);
};
export const createTasksRequest = (task) => {
  return axios.post("/tasks", task);
};
export const updateTasksRequest = (id, task) => {
  return axios.put(`/tasks/${id}`, task);
};
export const deleteTasksRequest = (id) => {
  return axios.delete(`/tasks/${id}`);
};
