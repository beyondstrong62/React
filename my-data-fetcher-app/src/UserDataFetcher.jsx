// src/components/UserDataFetcher.jsx
import React, { useState, useEffect } from 'react';

/**
 * UserDataFetcher Component
 * Demonstrates basic data fetching from a REST API using `useEffect` on component mount.
 * It simulates a common scenario like loading a list of users on page load.
 */
function UserDataFetcher() {
  // State to hold the fetched user data. Initialized as an empty array.
  const [users, setUsers] = useState([]);
  // State to indicate if data is currently being loaded. Helps with UI feedback.
  const [loading, setLoading] = useState(true);
  // State to store any errors that occur during fetching.
  const [error, setError] = useState(null);

  // The useEffect Hook is central to handling side effects like data fetching.
  // The empty dependency array `[]` ensures this effect runs ONLY ONCE
  // after the component is initially rendered (mounted to the DOM).
  useEffect(() => {
    console.log("useEffect: Component mounted. Initiating data fetch...");
    // Resetting loading and error states. This is good practice in case the component
    // somehow re-mounts or if a previous error needs to be cleared.
    setLoading(true);
    setError(null);

    // Define an asynchronous function to handle the data fetching logic.
    // This allows us to use `await` inside.
    const fetchUsers = async () => {
      try {
        // Step 1: Send API Request (GET request)
        // We use the native `fetch` API to make an HTTP GET request to JSONPlaceholder.
        // JSONPlaceholder provides mock REST APIs for testing.
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Check if the HTTP response status is OK (i.e., 200-299 range).
        if (!response.ok) {
          // If the response is not OK, throw an error to be caught by the `catch` block.
          // This allows us to handle network errors or server-side errors (e.g., 404, 500).
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Step 2: Parse the Response
        // Convert the raw response stream into a JavaScript object (JSON).
        const data = await response.json();

        // Step 3: Update UI with Fetched Data
        // Once data is successfully parsed, update the `users` state.
        // This will trigger a re-render of the component with the new data.
        setUsers(data);
        console.log("useEffect: User data fetched and state updated successfully!");

      } catch (err) {
        // Step 4: Handle Errors
        // If any error occurs during the fetch operation (e.g., network issues, invalid URL,
        // or errors thrown by `response.ok` check), it's caught here.
        console.error("useEffect: Error fetching user data:", err);
        setError(err); // Store the error object in state to display to the user.
      } finally {
        // This block executes regardless of whether the `try` block succeeded or `catch` block ran.
        // It's crucial for turning off the loading indicator.
        setLoading(false);
        console.log("useEffect: Data fetch operation completed.");
      }
    };

    // Call the asynchronous function to execute the data fetching.
    fetchUsers();

    // Cleanup function (Optional for simple fetches, but good habit)
    // This function runs when the component unmounts (is removed from the DOM).
    // For more complex scenarios (e.g., subscriptions, event listeners, timers),
    // this is vital to prevent memory leaks or unwanted behavior.
    return () => {
      console.log("useEffect Cleanup: UserDataFetcher component is unmounting. Any pending operations would be cancelled here.");
      // Example: If you had an active subscription, you'd unsubscribe here.
      // Example: If you started a timer, you'd clear it here.
    };

  }, []); // Empty dependency array means: "Run this effect ONCE after the initial render."

  // Conditional rendering based on the component's current state.
  if (loading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p>Loading users... Please wait.</p>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '20px', height: '20px', animation: 'spin 1s linear infinite', display: 'inline-block' }}></div>
        {/* Simple CSS for spinner, you'd put this in index.css */}
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '20px', border: '1px solid #dc3545', margin: '10px', color: '#dc3545', borderRadius: '8px', backgroundColor: '#f8d7da' }}>
        <h2>Error Loading Data!</h2>
        <p>Failed to fetch users: {error.message}</p>
        <p>Please check your network connection or try again later.</p>
      </div>
    );
  }

  // If no loading and no error, display the fetched users.
  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', margin: '10px', borderRadius: '8px', backgroundColor: '#e0f7fa' }}>
      <h2>Users List (Fetched on Component Mount)</h2>
      <p>This demonstrates a typical "on mount" data fetch scenario in React.</p>
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

export default UserDataFetcher;