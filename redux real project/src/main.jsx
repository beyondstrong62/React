// src/main.jsx
// This is your application's entry point where you render the root component.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Assuming you have a basic CSS file for Tailwind or other styles
import { AuthProvider } from './context/AuthContext.jsx'; // Import the AuthProvider

// Inject Tailwind CSS from CDN
// For a production Vite app, you'd typically install Tailwind via npm and configure it.
// This CDN approach is for quick, self-contained demonstration within this environment.
const tailwindCDN = document.createElement('script');
tailwindCDN.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindCDN);

// Inject Inter font
const interFontLink = document.createElement('link');
interFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
interFontLink.rel = 'stylesheet';
document.head.appendChild(interFontLink);

// Global styles for the body
const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
document.head.appendChild(globalStyles);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your entire application with the AuthProvider */}
    {/* This makes the authentication state and dispatch function available globally. */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);