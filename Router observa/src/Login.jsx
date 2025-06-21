// src/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To redirect after login
import { useAuth } from './AuthContext'; // Import your AuthContext

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send these credentials to your backend
    // For this example, let's simulate a successful login
    if (username && password) {
      const simulatedUserData = {
        id: username, // Using username as ID for simplicity
        name: username,
        email: `${username}@example.com`,
      };
      login(simulatedUserData); // Call the login function from AuthContext
      navigate('/'); // Redirect to the home page after login
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;