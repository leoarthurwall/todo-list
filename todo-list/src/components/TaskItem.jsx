export default function TaskItem({ task }) {
  return (
    <li className="task-item">
      <div className="task-group">
        <input
          type="checkbox"
          checked="task.checked"
          // onChange={}
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
