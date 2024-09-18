import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TasksPage() {
  const { getTasks, tasks } = useTasks();
  const [loading, setLoading] = useState(true);

  // Estado para el criterio de ordenación
  const [sortCriteria, setSortCriteria] = useState("newest"); // Inicializado en "title"

  useEffect(() => {
    const fetchData = async () => {
      await getTasks();
      setLoading(false);
    };
    fetchData();
  }, []);

  // Función para ordenar las tareas según el criterio seleccionado
  const sortTasks = (tasks) => {
    return [...tasks].sort((a, b) => {
      const dateA = dayjs.utc(a.date);
      const dateB = dayjs.utc(b.date);

      if (sortCriteria === "newest") {
        // Ordenar por fecha descendente (de la más reciente a la más antigua)
        return dateA.isAfter(dateB) ? -1 : dateA.isBefore(dateB) ? 1 : 0;
      } else if (sortCriteria === "oldest") {
        // Ordenar por fecha ascendente (de la más antigua a la más reciente)
        return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
      }

      return 0;
    });
  };

  // Cambiar el criterio de ordenación
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (tasks.length === 0) {
    return <h1>No tasks</h1>;
  }

  // Ordenar las tareas antes de renderizarlas
  const sortedTasks = sortTasks(tasks);

  return (
    <div>
      {/* Filtro de ordenación */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="sort"
          className="mr-2 text-lg font-medium text-white-700 my-5"
        >
          Order by:
        </label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={handleSortChange}
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-150"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Mostrar las tareas ordenadas */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {sortedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
export default TasksPage;

// import { useEffect } from "react";
// import { useTasks } from "../context/TasksContext";

// function TasksPage() {
//   const { getTasks, tasks } = useTasks();

//   useEffect(() => {
//     getTasks();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {tasks.map((task) => (
//         <div
//           key={task._id}
//           className="bg-zinc-800 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow"
//         >
//           <h1 className="text-xl font-bold text-white mb-2">{task.title}</h1>
//           <p className="text-gray-300">{task.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default TasksPage;
