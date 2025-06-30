// src/App.jsx
import React, { useState } from 'react'; // CORRECTED: Removed '=> {' from here

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to React Testing!</h1>
      <p>Enter your name below:</p>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleChange}
        style={{ padding: '8px', margin: '10px', border: '1px solid gray' }}
      />
      {name && <p>Hello, {name}!</p>}
      <button style={{ padding: '10px 15px', cursor: 'pointer' }}>
        Submit
      </button>
    </div>
  );
}

export default App;