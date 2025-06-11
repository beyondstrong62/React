import React from 'react';
import ProfileCard from './ProfileCard'; // Import the ProfileCard component

function App() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>
      <h1>Our Team Profiles</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {/* First Profile Card */}
        <ProfileCard
          name="Alice Smith"
          email="alice.smith@example.com"
          avatar="https://placehold.co/100x100/ADD8E6/000000?text=Alice" // Example avatar URL
        />

        {/* Second Profile Card */}
        <ProfileCard
          name="Bob Johnson"
          email="bob.j@example.com"
          avatar="https://placehold.co/100x100/FFB6C1/000000?text=Bob" // Another example avatar URL
        />

        {/* Third Profile Card (with a slightly different avatar for variety) */}
        <ProfileCard
          name="Charlie Brown"
          email="charlie.b@example.com"
          avatar="https://placehold.co/100x100/90EE90/000000?text=Charlie"
        />

        {/* Fourth Profile Card (demonstrates placeholder if avatar is missing) */}
        <ProfileCard
          name="Diana Prince"
          email="diana.p@example.com"
          // No avatar prop provided here to show the fallback
        />
      </div>
    </div>
  );
}

export default App;
