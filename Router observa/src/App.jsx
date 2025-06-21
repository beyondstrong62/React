import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';
import Login from './Login'; // Assume you have a Login component
import { useAuth } from './AuthContext'; // Import your AuthContext

function App() {
  const { user, logout } = useAuth(); // Get logged-in user from context

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        {user ? (
          <>
            {/* If logged in, show "My Profile" link pointing to their ID */}
            | <Link to={`/user/${user.id}`}>My Profile</Link>
            | <button onClick={logout}>Logout ({user.name})</button>
          </>
        ) : (
          // If not logged in, show "Login" link
          <>
            | <Link to="/login">Login</Link>
            {/* Maybe a link to a generic user profile, or just hide it */}
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;