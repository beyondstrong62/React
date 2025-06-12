import React from 'react';

/**
 * Footer component for the Cranes Varsity website.
 * Displays copyright and basic contact information.
 */
function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a202c', // Same as header for consistency
      color: '#a0aec0', // Light gray text
      padding: '20px 40px',
      marginTop: '30px',
      borderRadius: '8px',
      boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.9em'
    }}>
      <p style={{ margin: '0 0 10px 0' }}>
        &copy; {new Date().getFullYear()} Cranes Varsity. All rights reserved.
      </p>
      <p style={{ margin: '0' }}>
        Contact: admissions@cranesvarsity.edu | Phone: +123 456 7890
      </p>
    </footer>
  );
}

export default Footer;
