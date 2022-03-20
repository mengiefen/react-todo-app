import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoPage from './Pages/TodoPage';
import About from './Pages/About';
import NoMatch from './Pages/NoMatch';
import Navbar from './Pages/Navbar';

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
