import "./index.css";
import { useState } from "react";

//custom components
import { CustomForm } from "./components/CustomForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    const updatedTasks = [...tasks].filter((todo) => todo.id !== id)

    setTasks(updatedTasks)
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };



  return (
    <div className="app-container">
      <header>
        <h1 className="header">My Task List</h1>
      </header>
      
      <CustomForm addTask={addTask} tasks={tasks}  />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={toggleTask}
        />
      )}
    </div>
  );
}

export default App;


//TODO: DONT USE EDITING MODAL - SIMPLY MAKE EDITS IN THE SEARCH BAR OR EVEN THE NOTE ITSELF... CHECK OTHER VIDEO
// https://www.youtube.com/watch?v=7u2Rv4HfCYQ

