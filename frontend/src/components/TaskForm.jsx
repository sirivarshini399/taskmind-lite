import { useEffect, useState } from "react";

function TaskForm({ onAdd, editingTask, onUpdate }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Fill form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      onUpdate({
        ...editingTask,
        title,
        priority,
      });
    } else {
      onAdd({
        title,
        priority,
        completed: false,
      });
    }

    setTitle("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;