// **4. `src/App.jsx`**
// (Your main application component that will render the `Counter`.)

// ```javascript
import React from 'react';
import Counter from './components/Counter'; // Import your Counter component

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans p-4">
      <Counter />
    </div>
  );
}

export default App;