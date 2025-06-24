// src/App.jsx
// This is your main application component that renders different UI
// based on the global authentication state.
import React, { useState } from 'react';
import { useAuthState, useAuthDispatch } from './context/AuthContext';

// Login Component
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAuthDispatch();
  const { loading } = useAuthState(); // Use loading state to disable button

  const handleLogin = async () => {
    dispatch({ type: 'SET_LOADING', payload: true }); // Start loading
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === 'user' && password === 'pass') {
      const user = { username: username, role: 'admin' };
      localStorage.setItem('currentUser', JSON.stringify(user)); // Persist user
      dispatch({ type: 'LOGIN', payload: user });
    } else {
      alert('Invalid credentials!'); // Use a custom modal in a real app, not alert
      dispatch({ type: 'SET_LOADING', payload: false }); // Stop loading on failure
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
      <input
        type="text"
        placeholder="Username (e.g., user)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="password"
        placeholder="Password (e.g., pass)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleLogin}
        disabled={loading}
        className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out
          ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white shadow-lg hover:bg-blue-700 transform hover:scale-105'}`}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p className="text-sm text-gray-500 mt-4">Username: user, Password: pass</p>
    </div>
  );
}

// Dashboard Component (displayed when authenticated)
function DashboardPage() {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Clear persisted user
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl max-w-2xl w-full text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-4">Welcome, {user?.username}!</h2>
      <p className="text-xl text-gray-700 mb-6">You are now authenticated.</p>
      <div className="text-left bg-gray-50 p-6 rounded-lg mb-8 w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">User Details:</h3>
        <p className="text-lg text-gray-600"><strong>Username:</strong> {user?.username}</p>
        <p className="text-lg text-gray-600"><strong>Role:</strong> {user?.role}</p>
        {/* Imagine more user-specific dashboard content here */}
        <p className="text-gray-500 text-sm mt-4">
          This content is only visible to logged-in users.
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Logout
      </button>
    </div>
  );
}

// Main App component that uses the global auth state
function App() {
  // Get the current authentication state
  const { isAuthenticated, loading } = useAuthState();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
        <p className="text-2xl text-gray-600">Loading authentication status...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6 font-sans">
      {isAuthenticated ? <DashboardPage /> : <LoginPage />}
    </div>
  );
}

export default App;