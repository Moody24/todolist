import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  // State to store tasks
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] // Retrieve tasks from localStorage
  );

  // State for the new task input
  const [newTask, setNewTask] = useState("");

  // State for the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]); // Add the new task to the list
      setNewTask(""); // Clear the input field
    }
  };

  // Function to toggle task completion
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Header */}
      <h1>To-Do List</h1>

      {/* Search bar */}
      <div className="form-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks"
          className="search-input"
        />
      </div>

      {/* Input for adding new tasks */}
      <div className="form-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>

      {/* List of tasks */}
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            {/* Task text - click to toggle completion */}
            <span
              onClick={() => toggleCompletion(index)}
              className="task-text"
            >
              {task.text}
            </span>

            {/* Delete button */}
            <button
              onClick={() => deleteTask(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
