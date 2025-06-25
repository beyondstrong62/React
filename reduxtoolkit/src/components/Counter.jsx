// **3. `src/components/Counter.jsx`**
// (This React component interacts with your Redux store using `useSelector` and `useDispatch`.)

// ```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
  // useSelector: Hook to extract data from the Redux store state.
  const count = useSelector((state) => state.counter.value);

  // useDispatch: Hook to get the store's dispatch function.
  // You use this to dispatch actions to update the state.
  const dispatch = useDispatch();

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Redux Toolkit Counter</h1>
      <p className="text-6xl font-bold text-indigo-600">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())} // Dispatch the increment action
          className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())} // Dispatch the decrement action
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))} // Dispatch incrementByAmount with a payload
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        >
          Add 5
        </button>
      </div>
    </div>
  );
}

export default Counter;