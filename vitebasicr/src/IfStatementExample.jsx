// src/components/IfStatementExample.jsx
import React, { useState } from 'react';

function IfStatementExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //
  let content;
  if (isLoggedIn) { //
    content = <div className="dashboard-content">
        Welcome to Dashboard!</div>; //
  } else {
    content = <div className="login-content">
        Please Login.</div>; //
  }
  return (
    <div className="example-container">
      <h4>Slide 4: Using `if` Statements</h4>
      {content}
      <button onClick={() => 
        setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
    </div>
  );
}

export default IfStatementExample;