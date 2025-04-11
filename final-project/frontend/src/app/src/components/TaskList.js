import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/TaskItems')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="container">
      <h2>📝 Task List</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            <strong>{task.title}</strong> - {task.description} [{task.completed ? '✅' : '❌'}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;