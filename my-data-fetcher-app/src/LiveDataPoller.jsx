// src/components/LiveDataPoller.jsx
import React, { useState, useEffect, useCallback } from 'react';

/**
 * LiveDataPoller Component
 * Demonstrates API Polling using setInterval to fetch live updates.
 * Simulates fetching a "live price" or notification count.
 */
function LiveDataPoller() {
  const [liveValue, setLiveValue] = useState("N/A"); // Example: a price, or a count
  const [lastUpdated, setLastUpdated] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // *** MODIFIED API ENDPOINT HERE ***
      // Using a reliable random user API that returns JSON
      const response = await fetch('https://randomuser.me/api/?inc=name'); // Requesting only 'name' for simplicity

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // The randomuser.me API returns results in a 'results' array.
      // We want the full name from the first user in the results.
      if (data.results && data.results.length > 0) {
        const user = data.results[0].name;
        setLiveValue(`${user.first} ${user.last}`);
      } else {
        setLiveValue("No user found"); // Fallback if API structure changes or no results
      }

      setLastUpdated(new Date().toLocaleTimeString());
      console.log(`Polled new value: ${liveValue}`); // This will log the previous value due to state update async
    } catch (err) {
      console.error("Error polling data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [liveValue]); // Added liveValue to dependency array for accurate logging within callback

  useEffect(() => {
    console.log("useEffect: LiveDataPoller mounted. Starting polling interval...");

    // Immediately fetch data on mount so there's initial data
    fetchData();

    // Set up the interval for polling
    const intervalId = setInterval(() => {
      console.log("Polling for new data...");
      fetchData(); // Call the fetchData function periodically
    }, 5000); // Poll every 5 seconds (5000 milliseconds)

    // Return the cleanup function
    return () => {
      console.log("Cleanup function: Clearing polling interval.");
      clearInterval(intervalId); // Stop the interval when the component unmounts
    };

  }, [fetchData]);

  // Render logic (remains the same)
  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #dc3545', margin: '10px', color: '#dc3545', borderRadius: '8px', backgroundColor: '#f8d7da' }}>
        <h2>Error during Polling!</h2>
        <p>Details: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #20c997', margin: '10px', borderRadius: '8px', backgroundColor: '#e2f9f1', textAlign: 'center' }}>
      <h2>Live Data Poller</h2>
      <p>This component updates every 5 seconds to simulate live data.</p>

      <div style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#007bff', margin: '20px 0' }}>
        Current Live Value: {loading ? 'Fetching...' : liveValue}
      </div>
      <p style={{ fontSize: '0.9em', color: '#6c757d' }}>
        Last Updated: {lastUpdated || 'N/A'} {loading && '(fetching...)'}
      </p>

      <p style={{ marginTop: '25px', fontSize: '0.85em', color: '#555' }}>
        Check your browser console to see "Polling for new data..." messages.
      </p>
    </div>
  );
}

export default LiveDataPoller;