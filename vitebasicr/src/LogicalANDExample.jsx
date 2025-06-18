// src/components/LogicalANDExample.jsx
import React, { useState } from 'react';

function LogicalANDExample() {
  const [hasError, setHasError] = useState(false); //
  const [isSubmitted, setIsSubmitted] = useState(false); //

  return (
    <div className="example-container">
      <h4>Slide 6 & 13: Logical AND (`&&`) Operator</h4>
      {hasError && <p className="error-text">Error found!</p>} {/* */}
      <button onClick={() => setHasError(!hasError)}>Toggle Error</button>

      <br/><br/>

      {isSubmitted && <p className="submit-msg">Thank you for submitting!</p>} {/* */}
      <button onClick={() => setIsSubmitted(!isSubmitted)}>Toggle Submit Message</button>
    </div>
  );
}

export default LogicalANDExample;