import "./index.css";

//custom components
import { CustomForm } from "./components/CustomForm";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm />
    </div>
  );
}

export default App;
