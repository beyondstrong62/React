// src/components/Dashboard.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'; // Use NavLink for active styling in sub-nav

function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '20px', border: '1px solid #ccc', padding: '15px' }}>
      <nav style={{ minWidth: '150px', borderRight: '1px solid #eee', paddingRight: '15px' }}>
        <h3>Dashboard Sections</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'active-link' : ''}>
              Dashboard Home
            </NavLink>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <NavLink to="/dashboard/analytics" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Analytics
            </NavLink>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ flexGrow: 1, paddingLeft: '15px' }}>
        {/* The Outlet component will render the matched child route element here */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;