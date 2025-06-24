// src/components/UserDataFetcherThen.jsx
import React, { useState, useEffect } from 'react';

/**
 * UserDataFetcherThen Component
 * Demonstrates basic data fetching from a REST API using `useEffect`
 * and the .then() syntax for Promises.
 */
function UserDataFetcherThen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect (using .then()): Component mounted. Initiating data fetch...");
    setLoading(true);
    setError(null);s

    // Using the native `fetch` API with .then() for Promise chaining
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Step 1: Check if the HTTP response status is OK (200-299)
        if (!response.ok) {
          // If not OK, throw an error to be caught by the .catch() block
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Step 2: Parse the response as JSON. This also returns a Promise.
        return response.json();
      })
      .then(data => {
        // Step 3: Data successfully parsed, update the 'users' state.
        setUsers(data);
        console.log("useEffect (using .then()): User data fetched and state updated successfully!");
      })
      .catch(err => {
        // Step 4: Handle any errors that occurred during the fetch or parsing.
        console.error("useEffect (using .then()): Error fetching user data:", err);
        setError(err); // Store the error object in state.
      })
      .finally(() => {
        // This block always runs, regardless of success or failure.
        // Crucial for turning off the loading indicator.
        setLoading(false);
        console.log("useEffect (using .then()): Data fetch operation completed.");
      });

    // Cleanup function (same principles apply as with async/await)
    return () => {
      console.log("useEffect Cleanup (using .then()): UserDataFetcherThen component unmounting.");
    };

  }, []); // Empty dependency array: runs only once on mount.

  // Conditional rendering based on state (identical to the async/await version)
  if (loading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p>Loading users (using .then())... Please wait.</p>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '20px', height: '20px', animation: 'spin 1s linear infinite', display: 'inline-block' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #dc3545', margin: '10px', color: '#dc3545', borderRadius: '8px', backgroundColor: '#f8d7da' }}>
        <h2>Error Loading Data (using .then())!</h2>
        <p>Failed to fetch users: {error.message}</p>
        <p>Please check your network connection or try again later.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', margin: '10px', borderRadius: '8px', backgroundColor: '#e0f7fa' }}>
      <h2>Users List (Fetched with .then() on Component Mount)</h2>
      <p>This demonstrates fetching data using Promise chaining (`.then()` method).</p>
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

export default UserDataFetcherThen;