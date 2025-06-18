import React from 'react';

/**
 * MainContent component for Cranes Varsity.
 * Contains attractive and catchy information about the institution.
 */
function MainContent() {
  return (
    <main style={{
      flexGrow: 1, // Allows it to take up available space
      backgroundColor: '#ffffff', // White background for content
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      fontFamily: 'Inter, sans-serif',
      lineHeight: '1.7',
      color: '#2d3748', // Dark text color
      '@media (max-width: 768px)': { // Responsive styling for smaller screens
        padding: '20px',
        order: 1 // Changes order in flex container
      }
    }}>
      <h2 style={{ color: '#007bff', fontSize: '2.5em', marginBottom: '20px', textAlign: 'center' }}>
        Unlock Your Potential at Cranes Varsity!
      </h2>
      <p style={{ fontSize: '1.1em', marginBottom: '20px', textAlign: 'justify' }}>
        At **Cranes Varsity**, we don't just educate; we *empower*. Nestled at the forefront of innovation, our institution is dedicated to sculpting the next generation of leaders, thinkers, and disruptors. With a curriculum designed for tomorrow and faculty passionate about today, we provide an unparalleled learning experience that transcends traditional boundaries.
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e2e8f0', // Light gray background for highlights
        borderRadius: '8px',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
          <span style={{ fontSize: '2em', color: '#38a169' }}>💡</span>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>Innovative Learning</h3>
            <p style={{ margin: '0', fontSize: '1em' }}>
              Dive deep into cutting-edge technologies and methodologies. Our hands-on approach ensures you gain practical skills that are directly applicable to the real world.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
          <span style={{ fontSize: '2em', color: '#dd6b20' }}>🌐</span>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>Global Perspectives</h3>
            <p style={{ margin: '0', fontSize: '1em' }}>
              Connect with a diverse community of students and mentors. Our programs are designed to give you a global edge in an increasingly interconnected world.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
          <span style={{ fontSize: '2em', color: '#9f7aea' }}>💼</span>
          <div>
            <h3 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>Career-Ready Graduates</h3>
            <p style={{ margin: '0', fontSize: '1em' }}>
              From robust career services to industry partnerships, we equip our graduates with the tools and connections needed to thrive in their chosen fields.
            </p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '1.1em', marginTop: '30px', textAlign: 'center', fontStyle: 'italic', color: '#555' }}>
        Join Cranes Varsity and transform your aspirations into achievements. Your future begins here!
      </p>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '12px 25px',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1.1em',
        cursor: 'pointer',
        marginTop: '25px',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        '&:hover': { backgroundColor: '#0056b3', transform: 'scale(1.05)' },
        '&:active': { transform: 'scale(0.98)' },
        display: 'block', // Make button a block element to center it
        margin: '25px auto 0 auto' // Center button horizontally
      }}>
        Ready to Begin Your Journey? Admissions Open!
      </button>
    </main>
  );
}

export default MainContent;
