import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)} className="button-delete">Delete</button>
    </div>
  );
}

export default TaskCard;
