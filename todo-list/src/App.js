import "./index.css";
import { useState } from "react";

//custom components
import { CustomForm } from "./components/CustomForm";
import { TaskList } from "./components/TaskList";
import { EditForm } from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true)
  };
  return (
    <div className="app-container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;


//TODO: DONT USE EDITING MODAL - SIMPLY MAKE EDITS IN THE SEARCH BAR OR EVEN THE NOTE ITSELF... CHECK OTHER VIDEO
// https://www.youtube.com/watch?v=7u2Rv4HfCYQ

