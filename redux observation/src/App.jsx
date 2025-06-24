// src/App.jsx
// This is your main application component that uses the global state.
import React from 'react';
import { useCounterState, useCounterDispatch } from './context/CounterContext';

// A simple component to display the counter value
function CounterDisplay() {
  // Use the custom hook to get the current state from the global context
  const count = useCounterState();

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-800">Current Count: {count}</h2>
    </div>
  );
}

// A component with buttons to modify the counter value
function CounterControls() {
  // Use the custom hook to get the dispatch function
  const dispatch = useCounterDispatch();

  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-lg shadow-md mt-4">
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Increment (+)
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className="px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Decrement (-)
      </button>
      <button
        onClick={() => dispatch({ type: 'RESET' })}
        className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Reset (0)
      </button>
    </div>
  );
}

// The main App component
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Global Counter Example
      </h1>
      <CounterDisplay />
      <CounterControls />

      {/* Another component demonstrating access to the same global state */}
      <div className="mt-8 p-6 bg-purple-100 rounded-xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">
          Another Part of Your App
        </h3>
        <p className="text-gray-700 mb-4">
          This component is separate from the display and controls, but still
          accesses the same global count.
        </p>
        <SmallDisplayComponent />
        <SmallControlsComponent />
      </div>
    </div>
  );
}

// A small component nested deeper to show state access
function SmallDisplayComponent() {
  const count = useCounterState();
  return (
    <div className="p-3 bg-purple-200 rounded-md mb-3">
      <p className="text-purple-900">Nested Display: {count}</p>
    </div>
  );
}

// A small component nested deeper to show dispatch capabilities
function SmallControlsComponent() {
  const dispatch = useCounterDispatch();
  return (
    <div className="flex gap-2">
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        className="px-4 py-2 bg-purple-500 text-white text-sm rounded-md hover:bg-purple-600 transition-colors"
      >
        Add (Nested)
      </button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        className="px-4 py-2 bg-purple-400 text-white text-sm rounded-md hover:bg-purple-500 transition-colors"
      >
        Subtract (Nested)
      </button>
    </div>
  );
}

export default App;