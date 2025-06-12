import React from "react";

function App() {
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
    </div>
  );
}

export default App;
