import React from 'react';

// --- Component using JSX (What you typically write) ---
function JsxExample() {
  return (
    <div className="jsx-container">
      <h2>JSX Example</h2>
      <p>This paragraph is written using standard JSX syntax.</p>
      <button onClick={() => alert('Clicked JSX button!')}>Click Me (JSX)</button>
    </div>
  );
}

// --- Component using React.createElement (What JSX compiles to) ---
// This is the direct JavaScript equivalent of the JsxExample component.
// You would generally NOT write React components this way in modern React.
function CreateElementExample() {
  return React.createElement(
    'div', // Element type (div)
    { className: 'create-element-container' }, // Props object
    React.createElement('h2', null, 'React.createElement Example'), // Child 1 (h2)
    React.createElement('p', null, 'This paragraph is created using React.createElement().'), // Child 2 (p)
    React.createElement(
      'button', // Child 3 (button)
      {
        onClick: () => alert('Clicked React.createElement button!')
      },
      'Click Me (React.createElement)'
    )
  );
}

// --- Main App component to render both examples ---
function JSX_vs_ReactCreateElement() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
      <h1>JSX vs. React.createElement Demonstration</h1>

      {/* Render the JSX example component */}
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '80%', maxWidth: '500px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3>Rendered from JSX:</h3>
        <JsxExample />
      </div>

      {/* Render the React.createElement example component */}
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '80%', maxWidth: '500px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3>Rendered from React.createElement():</h3>
        <CreateElementExample />
      </div>

      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
        <strong>Note:</strong> In a real React project, the JSX you write
        is automatically converted to `React.createElement()` calls by tools like Babel.
        You typically only write JSX.
      </p>
    </div>
  );
}

export default JSX_vs_ReactCreateElement;
