import "./index.css";
import { useState } from "react";

//custom components
import { CustomForm } from "./components/CustomForm";
import { TaskList } from "./components/TaskList";
import { EditForm } from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTasks] = useState(null);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
  };
  return (
    <div className="app-container">
      <header>
        <h1>My Task List</h1>
      </header>
      <EditForm editedTask={editedTask} updateTask={updateTask} />
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={toggleTask} />
      )}
    </div>
  );
}

export default App;
