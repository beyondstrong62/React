import React from 'react';

/**
 * A simple functional React component that displays a greeting.
 * It receives a 'name' prop and renders "Hello, {name}!".
 *
 * @param {object} props - The props object containing component properties.
 * @param {string} props.name - The name to display in the greeting.
 */
function Greeting(props) {
  // Access the 'name' prop from the props object
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Render an h2 element, using the name prop */}
      <h2>Hello, {props.name}!</h2>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        This is a simple React component displaying a greeting based on a 'prop'.
      </p>
    </div>
  );
}

export default Greeting;
