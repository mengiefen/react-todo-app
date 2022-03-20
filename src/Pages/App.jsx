import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './TodoPage';
import About from './About';
import NoMatch from './NoMatch';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="about/*" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
