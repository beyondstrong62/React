import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-white">Counter Component</h1>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-white">
        <p className="text-xl">Count: {count}</p>
        <p className={`text-lg ${isEven ? 'text-green-500' : 'text-red-500'}`}>
          {isEven ? "Even" : "Odd"}
        </p>
        <button
          onClick={() => setCount((count) =>count+ 5)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => 
            setCount(count - 1)}
          className="ml-2 mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement 
        </button>
        <button
          onClick={() => setCount(0)}
          className="ml-2 mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >

            Reset   
        </button>
      </div>
    </div>
  );
}

export default Counter;
