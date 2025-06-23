// src/App.jsx
import React, { useState } from 'react';
import CryptoDashboard from './components/CryptoDashboard';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

function App() {
  const [retryKey, setRetryKey] = useState(0); // Key to force re-mount of CryptoDashboard for retry

  // This function is passed to ErrorBoundary and called when an error is caught.
  const handleDashboardRetry = () => {
    console.log("App.jsx: Retrying dashboard...");
    setRetryKey(prevKey => prevKey + 1); // Change key to force re-mount
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Live Crypto Dashboard with Advanced Features
      </h1>

      {/* Wrap CryptoDashboard with ErrorBoundary */}
      <ErrorBoundary key={retryKey} onRetry={handleDashboardRetry} debug={true}>
        <CryptoDashboard />
      </ErrorBoundary>

      <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.85em', color: '#666' }}>
        Data from CoinGecko API. Auto-refreshes every 10s. Includes offline caching,
        error handling with retry, and search debouncing.
      </p>
    </div>
  );
}

export default App;