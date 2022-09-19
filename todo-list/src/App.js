import "./index.css";

//custom components
import { CustomForm } from "./components/CustomForm";

function App() {

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="app-container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask}/>
    </div>
  );
}

export default App;
