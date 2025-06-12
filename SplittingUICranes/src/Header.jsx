import React from 'react';

/**
 * Header component for the Cranes Varsity website.
 * Displays the institution's name and a catchy tagline.
 */
function Header() {
  return (
    <header style={{
      backgroundColor: '#1a202c', // Dark blue-gray
      color: '#edf2f7', // Light gray text
      padding: '20px 40px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px', // Rounded corners
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Placeholder for a logo/icon */}
        <span style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#63b3ed' }}>
          🎓
        </span>
        <div>
          <h1 style={{ margin: '0', fontSize: '2.2em', fontWeight: 'bold' }}>
            Cranes Varsity
          </h1>
          <p style={{ margin: '0', fontSize: '1em', color: '#a0aec0' }}>
            Soar Higher. Learn Smarter. Innovate Futures.
          </p>
        </div>
      </div>
      <nav>
        {/* Navigation links (simplified for this example) */}
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', gap: '25px' }}>
          <li><a href="#about" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#63b3ed' } }}>About Us</a></li>
          <li><a href="#courses" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#63b3ed' } }}>Courses</a></li>
          <li><a href="#admissions" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#63b3ed' } }}>Admissions</a></li>
          <li><a href="#contact" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '1.1em', transition: 'color 0.3s ease', '&:hover': { color: '#63b3ed' } }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
