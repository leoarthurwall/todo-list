import TaskItem from './TaskItem'

export const TaskList = ({tasks}) => {
  return (
    <ul className="task-list">
        {tasks.map(task => (
            <TaskItem 
                key={task.id}
                task={task}
            />
        ))

        }

    </ul>
  )
}
