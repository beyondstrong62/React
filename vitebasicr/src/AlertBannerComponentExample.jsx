// src/components/AlertBannerComponentExample.jsx
import React, { useState } from 'react';

function Alert({ type }) { //
  return type === 'error' ? <div>❌ Error</div> : <div>✅ Success</div>; //
}

function AlertBannerComponentExample() {
  const [alertType, setAlertType] = useState('success');

  return (
    <div className="example-container">
      <h4>Slide 11: Alert Banner</h4>
      <Alert type={alertType} /> {/* */}
      <button onClick={() => setAlertType('error')}>Show Error</button>
      <button onClick={() => setAlertType('success')}>Show Success</button>
    </div>
  );
}
export default AlertBannerComponentExample;
