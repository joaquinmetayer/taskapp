import { useState, useContext } from "react";
import { tasks } from "../data/tasks";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      id: tasks.length,
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your task title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <textarea
        placeholder="Task description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="button-add">Add task</button>
    </form>
  );
}

export default TaskForm;
