import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const handleFormSubmit = (e) => {
  e.preventDefailt();
  console.log(e);
};

export const CustomForm = () => {
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          // value={task}
          // inInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="button" aria-label="Add Task" type="submit">
        <BeakerIcon className="h-6 w-6 text-blue-500" />
      </button>
    </form>
  );
};
