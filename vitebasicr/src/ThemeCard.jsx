// src/components/ThemedCard.jsx
import React, { useState } from 'react';

function ThemedCard() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track the current theme mode

  // Determine card styles based on isDarkMode state
  const cardStyles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#eee' : '#333',
    border: `1px solid ${isDarkMode ? '#555' : '#ccc'}`,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
    maxWidth: '300px',
    margin: '0 auto' // Center the card
  };

  const buttonStyles = {
    backgroundColor: isDarkMode ? '#007bff' : '#6c757d', // Different button color for modes
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div className="example-container">
      <h4> Mini Project : Themed Card</h4>

      <div style={cardStyles}> {/* Apply dynamic styles directly */}
        <h3>My Themed Card</h3>
        <p>This card is currently in {isDarkMode ? 'Dark' : 'Light'} Mode.</p>
        <p>You can toggle the theme using the button below.</p>
      </div>

      <button onClick={() => setIsDarkMode(!isDarkMode)} style={buttonStyles}>
        Toggle Theme to {isDarkMode ? 'Light' : 'Dark'}
      </button>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
        Brief for Slides:
        <br/>- Uses `useState` to manage `isDarkMode` boolean state.
        <br/>- Conditional Styling: `cardStyles` and `buttonStyles` objects are dynamically built based on `isDarkMode`.
        <br/>- Toggling: The button inverts the `isDarkMode` state, which triggers a re-render and updates the styles and button text.
      </p>
    </div>
  );
}

export default ThemedCard;