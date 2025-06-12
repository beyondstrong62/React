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
        {/* Profile Card for a Female Character */}
        <ProfileCard
          name="Olivia Adams"
          email="olivia.a@example.com"
          avatar="https://avatar.iran.liara.run/public/6" // Example female cartoon avatar
        />

        {/* Profile Card for a Male Character */}
        <ProfileCard
          name="Liam Parker"
          email="liam.p@example.com"
          avatar="https://avatar.iran.liara.run/public/11" // Example male cartoon avatar
        />

        {/* Another Female Character */}
        <ProfileCard
          name="Sophia Miller"
          email="sophia.m@example.com"
          avatar="https://avatar.iran.liara.run/public/15" // Another example female cartoon avatar
        />

        {/* Another Male Character */}
        <ProfileCard
          name="Noah Davis"
          email="noah.d@example.com"
          avatar="https://avatar.iran.liara.run/public/20" // Another example male cartoon avatar
        />

        {/* Profile Card showing fallback if avatar link is broken or not provided */}
        <ProfileCard
          name="Zoe Chen"
          email="zoe.c@example.com"
          avatar="https://this-link-does-not-exist.com/avatar.png" // Intentionally broken link to show onError
        />
      </div>
    </div>
  );
}

export default App;
