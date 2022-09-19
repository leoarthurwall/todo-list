import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

export const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // updateTask()
  };

  return (
    // <div 
    // role ="dialog" aria-labelledby="editTask" 
    // // onClick={}
    // >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            autoComplete="off"
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label"></label>
        </div>
        <button className="button"
         aria-label={`confirm edited task to now read ${updatedTaskName}`} 
         type="submit">
          <CheckIcon strokeWidth={2} height={20} width={20} />
        </button>
      </form>
    // </div>
  );
};
