import TaskItem from "./TaskItem";

export const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul className="task-list">
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} editTask={toggleTask}/>
        ))}
    </ul>
  );
};
