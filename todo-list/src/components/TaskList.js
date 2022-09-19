import TaskItem from "./TaskItem";

export const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
};
