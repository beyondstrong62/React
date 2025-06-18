// src/App.jsx

// Correcting the import path based on the common assumption that
// 'Counter.jsx' might be in the same directory as 'App.jsx' (i.e., 'src/').
// If your 'Counter.jsx' file is actually inside a 'components' folder (e.g., 'src/components/Counter.jsx'),
// please change the import path back to './components/Counter.jsx'.
import React from 'react';
import Counter from './counter.jsx'; // Adjust the path if necessary
import CounterButton from './CounterButton.jsx';
import TextBox from './TextBox.jsx';
import Clock from './Clock.jsx';

function App() {
  // Your existing state and functions (username, counter, rana, addValue)
  // These are not being used in the current return block, but they are fine.
  const username = 'John Doe';
  const [counter, setCounter] = React.useState(0);

  const rana = () => {
    console.log("Rana function called");
    setCounter(counter + 1);
  };

  const addValue = (v) => {
    console.log("Adding value:", v);
    setCounter(counter + v);
  }
  

  return (
    <div>
      {/* Your commented out code is fine, just leaving it commented as you had it */}
      {/*
      <h1 className="text-3xl font-bold underline text-white">Welcome to My App</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Hello, {username}! You have clicked the button {counter} times.
      </p>
      <button
        onClick={rana}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click Me
      </button>
      <button
        onClick={() => addValue(5)}
        className="ml-2 mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add 5
      </button>
      */}

      {/* Render the Counter component */}
      <Counter />
      <CounterButton />
      <TextBox />
      <Clock />
    </div>
  );
}

export default App;
