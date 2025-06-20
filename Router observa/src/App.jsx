import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; // Assume Home.jsx exists
import About from './About'; // Assume About.jsx exists
import './App.css'; // For basic styling

function App() {
  return (
    <div>
      <nav>
        {/* Navigation using Link */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;