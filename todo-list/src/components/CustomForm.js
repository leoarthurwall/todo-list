import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";



export const CustomForm = () => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTask("")
  
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <p>{task}</p>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label"></label>
      </div>
      <button className="button" aria-label="Add Task" type="submit">
        <PlusIcon className="plus-icon" />
      </button>
    </form>
  );
};
