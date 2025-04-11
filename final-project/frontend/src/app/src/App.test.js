import React from 'react';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1>🧠 Task Manager</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;