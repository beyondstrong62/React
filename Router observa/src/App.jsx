import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext'; // For authentication state

// Import all components
import Home from './Home';
import About from './about';
import Login from './Login';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard'; // Parent for nested routes
import DashboardHome from './DashboardHome'; // Nested child
import DashboardAnalytics from './DashboardAnalytics'; // Nested child
import DashboardSettings from './DashboardSettings'; // Nested child
import NotFound from './NotFound'; // 404 page

function App() {
  const { user, logout } = useAuth(); // Get logged-in user from context

  return (
    <div className="app-container">
      <header style={{ background: '#f8f8f8', padding: '15px', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="main-nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink> |{' '}
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink> |{' '}
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>Dashboard</NavLink>
          </div>
          <div className="auth-nav-links">
            {user ? (
              <>
                <NavLink to={`/user/${user.id}`} className={({ isActive }) => isActive ? 'active-link' : ''}>
                  My Profile ({user.name})
                </NavLink>{' '}
                <button onClick={logout} style={{ marginLeft: '10px', padding: '8px 12px', cursor: 'pointer' }}>
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : ''}>Login</NavLink>
            )}
          </div>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <Routes>
          {/* Basic Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Dynamic Route with Params */}
          <Route path="/user/:id" element={<UserProfile />} />

          {/* Nested Routes for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* The 'index' route makes /dashboard render DashboardHome by default */}
            <Route index element={<DashboardHome />} />
            {/* Nested paths are relative to the parent path */}
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* Fallback Route (404 Page) - MUST BE THE LAST ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;