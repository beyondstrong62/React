// src/components/DataFetcherWithCleanup.jsx
import React, { useState, useEffect } from 'react';

/**
 * DataFetcherWithCleanup Component
 * Demonstrates data fetching with a cleanup function to cancel pending
 * fetch requests using AbortController, preventing memory leaks.
 */
function DataFetcherWithCleanup() {
  const [data, setData] = useState(null); // Changed to 'data' for generality
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect: DataFetcherWithCleanup mounted. Initiating fetch...");

    // 1. Create an AbortController instance
    const controller = new AbortController();
    const signal = controller.signal; // Get the signal from the controller

    setLoading(true);
    setError(null);

    // Make the fetch request, passing the signal
    fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(fetchedData => {
        setData(fetchedData);
        console.log("Fetch successful:", fetchedData);
      })
      .catch(err => {
        // Check if the error is an AbortError (request was canceled)
        if (err.name === 'AbortError') {
          console.log('Fetch aborted (component unmounted).');
          // No need to set error state if it's just a cancellation
        } else {
          console.error("Error fetching data:", err);
          setError(err.message); // Set error for actual failures
        }
      })
      .finally(() => {
        setLoading(false);
        console.log("Fetch operation completed (or aborted).");
      });

    // 2. Return the cleanup function
    return () => {
      console.log("Cleanup function: Aborting pending fetch request...");
      controller.abort(); // Call abort() when component unmounts
    };

  }, []); // Empty dependency array: runs only once on mount

  // Conditional rendering
  if (loading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p>Loading data with cleanup... (fetching single TODO item)</p>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '20px', height: '20px', animation: 'spin 1s linear infinite', display: 'inline-block' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #dc3545', margin: '10px', color: '#dc3545', borderRadius: '8px', backgroundColor: '#f8d7da' }}>
        <h2>Error Loading Data!</h2>
        <p>Details: {error}</p>
        <p>Please check your network connection or try again later.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ffc107', margin: '10px', borderRadius: '8px', backgroundColor: '#fff3cd' }}>
      <h2>Fetched Data (with Cleanup)</h2>
      <p>This component fetches a single TODO item and demonstrates how to cancel a pending request on unmount.</p>
      {data && (
        <div style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default DataFetcherWithCleanup;