// src/components/RoleBasedUIExample.jsx
import React, { useState } from 'react';

function AdminPanel() {
  return <div className="admin-panel">Admin Dashboard View</div>;
}
function UserPanel() {
  return <div className="user-panel">Standard User View</div>;
}
function RoleBasedUIExample() {
  const [user, setUser] = useState({ name: 'Rana', role: 'user' }); //

  return (
    <div className="example-container">
      <h4>Role-Based Conditional UI</h4>
      <p>Current Role: <strong>{user.role}</strong></p>
      {user.role === 'admin' ? <AdminPanel /> : <UserPanel />}
      <button onClick={() => 
        setUser({ ...user, role: user.role === 'admin' ? 'user' : 'admin' })}>
        Toggle Role
      </button>
    </div>
  );
}

export default RoleBasedUIExample;