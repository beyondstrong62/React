// src/main.jsx (or main.js if you prefer)
// This is your application's entry point where you render the root component.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Assuming you have a basic CSS file for Tailwind or other styles
import { CounterProvider } from './context/CounterContext.jsx'; // Import the provider

// Load Tailwind CSS from CDN - essential for the styling in this example
// In a real Vite project, you'd typically install Tailwind via npm and configure it.
// For this self-contained example, CDN is used for simplicity.
const tailwindCDN = document.createElement('script');
tailwindCDN.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindCDN);

// Set up the Inter font if you haven't already in your CSS
const interFontLink = document.createElement('link');
interFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap';
interFontLink.rel = 'stylesheet';
document.head.appendChild(interFontLink);

// Add a style block to ensure the body uses the Inter font and has basic styling
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
    {/* Wrap your entire application with the CounterProvider */}
    {/* This makes the state and dispatch functions available to all components within <App /> */}
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
);
