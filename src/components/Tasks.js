import React from 'react';
import Task from './Task';

const Tasks = React.memo(({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks to show</p>
      )}
    </>
  );
});

export default Tasks;
