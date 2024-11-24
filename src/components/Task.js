import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    const handleKeyDown = (e, action) => {
        if (e.key === 'Enter') {
            action();
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            onDelete(id);
        }
    };

    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
            tabIndex="0"
            role="button"
            onKeyDown={(e) => handleKeyDown(e, () => onToggle(task.id))}
        >
            <h3>
                {task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => handleDelete(task.id)}
                    tabIndex="0"
                    role="button"
                    onKeyDown={(e) => handleKeyDown(e, () => handleDelete(task.id))}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
