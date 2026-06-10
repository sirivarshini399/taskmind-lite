import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // GET tasks
  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD task
  const addTask = async (task) => {
    await axios.post(API, task);
    fetchTasks();
  };

  // DELETE task
  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  // TOGGLE task
  const toggleTask = async (task) => {
    await axios.put(`${API}/${task._id}`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  // START EDIT
  const startEdit = (task) => {
    setEditingTask(task);
  };

  // UPDATE task
  const updateTask = async (updatedTask) => {
    await axios.put(`${API}/${updatedTask._id}`, updatedTask);
    setEditingTask(null);
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>TaskMind Lite</h1>

      <TaskForm
        onAdd={addTask}
        editingTask={editingTask}
        onUpdate={updateTask}
      />

      <hr />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={startEdit}
      />
    </div>
  );
}

export default App;