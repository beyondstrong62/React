// src/components/UserProfile.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Note: path changed to .. to go up one level

function UserProfile() {
  const { id } = useParams();
  const { user } = useAuth();

  const isMyProfile = user && user.id === id;

  // Simulate fetching data for the displayed profile
  // In a real app, you'd make an API call to your backend here
  // const [profileData, setProfileData] = useState(null);
  // useEffect(() => {
  //   // Example: fetch(`/api/users/${id}`, { headers: { Authorization: `Bearer ${token}` }})
  //   // setProfileData(...)
  // }, [id, token]);

  // For demonstration:
  const dummyUserProfiles = {
    'alice': { name: 'Alice', bio: 'A friendly user.', email: 'alice@example.com' },
    'bob': { name: 'Bob', bio: 'Loves coding in React.', email: 'bob@example.com' },
    'charlie': { name: 'Charlie', bio: 'Enjoys learning new tech.', email: 'charlie@example.com' },
  };

  const currentProfileData = isMyProfile ? user : dummyUserProfiles[id];
  const displayProfile = currentProfileData || { name: 'Unknown User', bio: 'Profile not found.' };


  return (
    <div>
      <h2>{isMyProfile ? "My Profile" : `${displayProfile.name}'s Profile`}</h2>
      <p>User ID: <strong>{id}</strong></p>
      <p>Name: {displayProfile.name}</p>
      <p>Bio: {displayProfile.bio}</p>
      {isMyProfile && displayProfile.email && (
        <p>Email: {displayProfile.email}</p>
      )}

      {isMyProfile && (
        <button style={{ padding: '8px 12px', cursor: 'pointer', marginRight: '10px' }}>Edit Profile</button>
      )}
      {!isMyProfile && user && ( // If logged in and viewing someone else's profile
        <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Follow {displayProfile.name}</button>
      )}
      {!user && ( // If not logged in at all
        <p>Please <Link to="/login">login</Link> to see personalized options or interact with profiles.</p>
      )}
    </div>
  );
}

export default UserProfile;