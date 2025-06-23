// src/App.jsx
import React from 'react';
import UserDataFetcher from './UserDataFetcher'; // Import the component

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>React Data Fetching Example</h1>
      <UserDataFetcher /> {/* Render the UserDataFetcher component */}
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9em', color: '#666' }}>
        This example fetches user data from <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a> on component mount.
      </p>
    </div>
  );
}

export default App;