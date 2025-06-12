import React from 'react';

/**
 * Sidebar component for Cranes Varsity.
 * Provides quick links to key sections or highlights.
 */
function Sidebar() {
  return (
    <aside style={{
      backgroundColor: '#2d3748', // Slightly lighter dark blue-gray
      color: '#e2e8f0', // Light text
      padding: '30px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Inter, sans-serif',
      minWidth: '200px', // Minimum width for sidebar
      '@media (max-width: 768px)': { // Responsive styling for smaller screens
        minWidth: 'auto',
        width: '100%',
        order: 2, // Changes order in flex container
        marginTop: '20px'
      }
    }}>
      <h3 style={{ marginTop: '0', color: '#63b3ed', fontSize: '1.4em' }}>Quick Links</h3>
      <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
        <li style={{ marginBottom: '15px' }}>
          <a href="#programs" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#90cdf4' } }}>
            🚀 Explore Programs
          </a>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <a href="#faculty" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#90cdf4' } }}>
            👨‍🏫 Meet Our Faculty
          </a>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <a href="#campus" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#90cdf4' } }}>
            🌳 Virtual Campus Tour
          </a>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <a href="#events" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#90cdf4' } }}>
            🗓️ Upcoming Events
          </a>
        </li>
        <li>
          <a href="#apply" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#90cdf4' } }}>
            ✍️ Apply Now!
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
