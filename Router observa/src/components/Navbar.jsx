// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Using Link and NavLink for navigation

function Navbar() {
  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '4px'
  };

  const activeLinkStyle = {
    backgroundColor: '#007bff',
    color: 'white'
  };

  return (
    <nav style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })} // NavLink for active styling
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })} // NavLink for active styling
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;