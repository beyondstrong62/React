// src/App.jsx
import React from 'react';
import SearchDataFetcherDebounced from './SearchDataFetcherDebounced'; // Import the new component

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>React Search Debouncing Example</h1>
      <SearchDataFetcherDebounced /> {/* Render the debounced search component */}
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9em', color: '#666' }}>
        This example demonstrates how to debounce search input to optimize API calls.
      </p>
    </div>
  );
}

export default App;