/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  updateTasksRequest,
  getTaskRequest
} from "../api/Tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data || []);
    } catch (error) {
      setTasks([]);
      console.error(error);
    }
  };
  
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
      } catch (error) {
        console.error(error);
        }
  }

  const createTasks = async (task) => {
    try {
      const res = await createTasksRequest(task);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTasks = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateTasksRequest(id, task);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        getTasks,
        deleteTasks,
        updateTask,
        getTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
