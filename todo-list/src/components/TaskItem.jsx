//library imports
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function TaskItem({ task }) {
    const [isChecked, setIsChecked] = useState(task.checked)

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
    }

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
    </li>
  );
}
