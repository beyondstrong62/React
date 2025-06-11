import React from 'react';

/**
 * ProfileCard component displays a user's name, email, and avatar.
 * It expects 'name', 'email', and 'avatar' as props.
 *
 * @param {object} props - The props object.
 * @param {string} props.name - The name of the user.
 * @param {string} props.email - The email of the user.
 * @param {string} props.avatar - The URL of the user's avatar image.
 */
function ProfileCard({ name, email, avatar }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      margin: '15px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#ffffff',
      width: '280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }}>
      {/* Avatar image */}
      <img
        src={avatar || 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Avatar'} // Placeholder if avatar is not provided
        alt={`${name}'s avatar`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%', // Makes the image circular
          objectFit: 'cover', // Ensures the image covers the area
          border: '3px solid #007bff'
        }}
        // Fallback for broken image links
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = 'https://placehold.co/100x100/FF0000/FFFFFF?text=Error';
        }}
      />
      {/* User's name */}
      <h2 style={{
        margin: '10px 0 5px 0',
        color: '#333',
        fontSize: '1.5em'
      }}>
        {name}
      </h2>
      {/* User's email */}
      <p style={{
        margin: '0',
        color: '#666',
        fontSize: '0.9em'
      }}>
        {email}
      </p>
    </div>
  );
}

export default ProfileCard;
