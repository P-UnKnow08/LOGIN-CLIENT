import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTasks } = useTasks([]);
  return (
    <div className="bg-zinc-800 w-full max-w-md p-10 md:p-10 rounded-md mx-auto md:mx-0 mb-4">
      <header className="flex flex-col md:flex-row justify-between mb-4">
        <h3 className="text-xl md:text font-bold text-white mb-2 md:mb-0">
          {task.title}
        </h3>
        <div className="flex gap-x-2 md:gap-x-4 items-center">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            onClick={() => {
              deleteTasks(task._id);
            }}
          >
            Delete
          </button>
          <Link
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
            to={`/tasks/${task._id}`}
          >
            Edit
          </Link>
        </div>
      </header>
      <p className="text-slate-300 text-sm md:text-base">{task.description}</p>
      <p className="text-gray-400 text-xs md:text-sm mt-2">
        {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>
    </div>
  );
}

export default TaskCard;

// import { useTasks } from "../context/TasksContext";

// function TaskCard({ task }) {
//   const { deleteTask } = useTasks();
//   return (
//     <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
//       <header className="flex justify-between">
//         <h1 className="text-2xl font-bold">{task.title}</h1>
//         <div className="flex gap-x-2 items-center">
//           <button
//             onClick={() => {
//               deleteTask(task._id);
//             }}
//           >
//             Delete
//           </button>
//           <button>Edit</button>
//         </div>
//       </header>
//       <p className="text-slate-300">{task._description}</p>
//       {/* <p className="">{new Date(task.date).toLocaleDateString()}</p> */}
//     </div>
//   );
// }
// export default TaskCard;
