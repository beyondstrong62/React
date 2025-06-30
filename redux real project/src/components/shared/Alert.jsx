import React from 'react';

function Alert({ message }) {
  return (
    <div style={{ padding: '20px', border: '1px solid red', color: 'red', textAlign: 'center' }}>
      Error: {message}
    </div>
  );
}

export default Alert;