
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';
import Task4 from './components/Task4/Task4';
import './App.css';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Frontend Assessment</h1>
      <nav className="nav">
        <Link to="/task1" className="task-link">Task 1</Link>
        <Link to="/task2" className="task-link">Task 2</Link>
        <Link to="/task3" className="task-link">Task 3</Link>
        <Link to="/task4" className="task-link">Task 4</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
      </Routes>
    </div>
  );
}

export default App;