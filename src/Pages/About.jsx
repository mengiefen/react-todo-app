import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SinglePage from './SinglePage';

function About() {
  return (
    <div className="about-page">
      <ul className="about-list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":common" element={<SinglePage />} />
      </Routes>
    </div>
  );
}
export default About;
