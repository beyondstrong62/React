import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your AuthContext

function UserProfile() {
  const { id } = useParams(); // ID from the URL (e.g., '42', 'john.doe')
  const { user } = useAuth(); // The currently logged-in user object

  // Determine if the currently viewed profile is the logged-in user's profile
  const isMyProfile = user && user.id === id;

  // In a real app, you'd fetch profile data for 'id' from your backend
  // For demonstration, let's just show some text
  const profileData = {
    'user123': { name: 'Alice', bio: 'Loves React.' },
    '42': { name: 'Bob', bio: 'Enjoys coding.' },
    // ... more user data
    [user?.id]: { name: user?.name, bio: 'This is my personal bio!' } // Example for logged-in user
  };

  const displayProfile = profileData[id] || { name: 'Unknown User', bio: 'Profile not found.' };

  return (
    <div>
      <h2>{isMyProfile ? "My Profile" : `${displayProfile.name}'s Profile`}</h2>
      <p>User ID: <strong>{id}</strong></p>
      <p>Name: {displayProfile.name}</p>
      <p>Bio: {displayProfile.bio}</p>

      {isMyProfile && (
        <button>Edit Profile</button> // Only show "Edit" button if it's your profile
      )}
      {!isMyProfile && user && (
         <button>Follow {displayProfile.name}</button> // Example for other users
      )}
      {!user && (
        <p>Login to see personalized options.</p>
      )}
    </div>
  );
}

export default UserProfile;