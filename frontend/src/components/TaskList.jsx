function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task._id}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            backgroundColor: task.completed ? "#d4ffd4" : "#fff",
          }}
        >
          <h3>{task.title}</h3>
          <p>Priority: {task.priority}</p>

          <button onClick={() => onToggle(task)}>
            {task.completed ? "Mark Pending" : "Mark Done"}
          </button>

          <button onClick={() => onEdit(task)}>
            Edit
          </button>

          <button onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;