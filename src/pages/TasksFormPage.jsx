import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TasksFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTasks, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    try {
      async function loadTask() {
        if (params.id) {
          // Si existe un id, estamos en el modo de edición
          const task = await getTask(params.id);
          setValue("title", task.title);
          setValue("description", task.description);
          // Usa la fecha de la tarea existente en lugar de la fecha actual
          setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
        } else {
          // Si no existe un id, estamos creando una nueva tarea, usa la fecha actual
          setValue("title", "");
          setValue("description", "");
          setValue("date", dayjs().format("YYYY-MM-DD"));
        }
      }
      loadTask();
    } catch (error) {
      console.error(error);
    }
  }, [params.id, setValue()]);

  const onSubmit = handleSubmit((data) => {
    try {
      if (params.id) {
        // Si estamos actualizando una tarea existente
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(), // Convertir la fecha al formato UTC
        });
      } else {
        // Si estamos creando una nueva tarea
        createTasks({ ...data, date: dayjs.utc(data.date).format() });
      }
    } catch (error) {
      console.error(error);
    }
    navigate("/tasks", { replace: true });
  });

  return (
    <div className="bg-zinc-700 flex h-[calc(100vh-100px)] items-center justify-center">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          {...register("title")}
          autoFocus
        />
        <label htmlFor="description">Description</label>
        <textarea
          rows="3"
          placeholder="Description"
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          {...register("description")}
        ></textarea>
        <label htmlFor="Date">Date</label>
        <input
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          type="date"
          {...register("date")}
        />
        <button className="w-full bg-blue-400 text-white px-4 py-2 rounded-md my-2">
          {params.id ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default TasksFormPage;
