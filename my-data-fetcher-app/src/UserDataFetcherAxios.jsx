// src/components/UserDataFetcherAxios.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

/**
 * UserDataFetcherAxios Component
 * Demonstrates data fetching from a REST API using Axios.
 * Highlights Axios benefits like simpler syntax and error handling.
 */
function UserDataFetcherAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect (using Axios): Component mounted. Initiating data fetch...");
    setLoading(true);
    setError(null); // Clear any previous errors

    // --- Axios Request ---
    // Axios automatically parses JSON responses, so you don't need .json()
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Axios wraps the actual data in a 'data' property.
        // It also handles response.ok implicitly by throwing an error on non-2xx status codes.
        setUsers(response.data); // Automatic JSON parsing
        console.log("useEffect (using Axios): User data fetched successfully!");
      })
      .catch(err => {
        // Cleaner error handling: Axios catches network errors and non-2xx HTTP codes here.
        // 'err.message' for general errors, 'err.response.status' for HTTP status.
        console.error("useEffect (using Axios): Error fetching user data:", err);
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(`HTTP Error! Status: ${err.response.status} - ${err.response.statusText}`);
          console.error("Error data:", err.response.data);
        } else if (err.request) {
          // The request was made but no response was received
          setError("Network Error: No response received.");
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Request Error: ${err.message}`);
        }
      })
      .finally(() => {
        // This block always executes, regardless of success or failure.
        setLoading(false);
        console.log("useEffect (using Axios): Data fetch operation completed.");
      });

    // Cleanup function: important if you had ongoing requests (e.g., using Axios cancellation tokens)
    return () => {
      console.log("useEffect Cleanup (using Axios): UserDataFetcherAxios component unmounting.");
      // If you were using cancellation tokens (advanced Axios feature):
      // source.cancel('Operation canceled by the user.');
    };

  }, []); // Empty dependency array means: run once on mount

  // Conditional rendering (same logic as previous examples)
  if (loading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p>Loading users (using Axios)... Please wait.</p>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '20px', height: '20px', animation: 'spin 1s linear infinite', display: 'inline-block' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #dc3545', margin: '10px', color: '#dc3545', borderRadius: '8px', backgroundColor: '#f8d7da' }}>
        <h2>Error Loading Data (using Axios)!</h2>
        <p>Failed to fetch users: {error}</p>
        <p>Please check your network connection or try again later.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #6f42c1', margin: '10px', borderRadius: '8px', backgroundColor: '#e6e6fa' }}>
      <h2>Users List (Fetched with Axios on Component Mount)</h2>
      <p>This demonstrates fetching data using the Axios library.</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <strong>{user.name}</strong> <span style={{ color: '#6c757d' }}>({user.email})</span>
            <p style={{ fontSize: '0.85em', color: '#495057' }}>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDataFetcherAxios;