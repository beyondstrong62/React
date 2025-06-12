import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

/**
 * Main App component that structures the entire UI.
 * It combines Header, Sidebar, MainContent, and Footer into a cohesive layout.
 */
function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Ensures the footer stays at the bottom
      backgroundColor: '#e2e8f0', // Overall light background
      padding: '20px',
      gap: '20px', // Space between main sections
      fontFamily: 'Inter, sans-serif'
    }}>
      <Header /> {/* Renders the Header component */}

      <div style={{
        display: 'flex',
        flexDirection: 'row', // Default to row for desktop
        flexGrow: 1, // Allows content area to grow
        gap: '20px',
        '@media (max-width: 768px)': { // Stacks components vertically on smaller screens
          flexDirection: 'column',
        }
      }}>
        <Sidebar /> {/* Renders the Sidebar component */}
        <MainContent /> {/* Renders the MainContent component */}
      </div>

      <Footer /> {/* Renders the Footer component */}
    </div>
  );
}

export default App;
