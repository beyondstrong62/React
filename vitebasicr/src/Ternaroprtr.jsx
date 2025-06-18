// src/components/TernaryOperatorExample.jsx
import React, { useState } from 'react';

function TernaryOperatorExample() {
  const [isDarkMode, setIsDarkMode] = useState(false); //
  return (
    <div className="example-container">
      <h4> Using Ternary Operator</h4>
      {isDarkMode ? //
        <div className="dark-theme-box">
            Dark Theme</div> : //
        <div className="light-theme-box">
            Light Theme</div> //
      }
      <button onClick={() =>
         setIsDarkMode(!isDarkMode)}>
            Toggle Theme</button>
    </div>
  );
}

export default TernaryOperatorExample;