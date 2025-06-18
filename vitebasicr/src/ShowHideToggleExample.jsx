// src/components/ShowHideToggleExample.jsx
import React, { useState } from 'react';
function ShowHideToggleExample() {
  const [visible, setVisible] = useState(false); //
  return (
    <div className="example-container">
      <h4>Example Show/Hide Toggle</h4>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Content' : 'Show Content'}
      </button>
      {visible && <p className="visible-content">
        Visible content</p>} {/* */}
    </div>
  );
}

export default ShowHideToggleExample;