import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TaskItem({ task }) {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="task-item">
      <div className="task-group">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className="task-item-label">
          {task.name}
        </label>
      </div>
      <div className="task-button-container">
        <button
          className="button"
          aria-label={`Update ${task.name} Task`}
          //onClick={}
        >
          <PencilSquareIcon width={20} height={20} color="white" />
        </button>
        <button
          className='button delete'
          aria-label={`Update ${task.name} Task`}
          //onClick={}
        >
          <TrashIcon width={20} height={20} color="white" />
        </button>
      </div>
    </li>
  );
}
