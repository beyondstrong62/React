import React, { useState } from 'react';

function Notifi() {
  // We'll use state to manage our notifications array
  // Initially, let's have a couple of notifications
  const [notifications, setNotifications] = useState([
    "New message from John",
    "Your order has shipped!",
    "Reminder: Meeting at 3 PM"
  ]);

  // Function to simulate clearing notifications
  const clearNotifications = () => {
    setNotifications([]); // Set the array to empty
  };

  // Function to simulate adding a new notification
  const addNotification = () => {
    const newNotification = `New alert! (${notifications.length + 1})`;
    // Use the spread operator to create a new array with existing and new notifications
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div>
      <h1>Notification Example</h1>
      ---

      {/* Conditional rendering for the notification message */}
      {notifications.length > 0 && (
        <p>
          You have **{notifications.length}** notification(s).
          <br />
          {/* Optionally, display the notifications themselves */}
          {notifications.map((notification, index) => (
            <span key={index} style={{ display: 'block', marginLeft: '20px', fontSize: '0.9em', color: '#555' }}>
              - {notification}
            </span>
          ))}
        </p>
      )}

      {/* Message when there are no notifications */}
      {notifications.length === 0 && (
        <p>No new notifications.</p>
      )}

      ---

      {/* Buttons to interact with notifications */}
      <button onClick={addNotification} style={{ marginRight: '10px' }}>
        Add New Notification
      </button>
      <button onClick={clearNotifications}>
        Clear All Notifications
      </button>
    </div>
  );
}

export default Notifi;