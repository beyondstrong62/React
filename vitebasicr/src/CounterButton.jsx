import React, { useState } from 'react'; // 

function CounterButton() {
  // 1. Initial count = 0
  // useState Hook to declare a state variable 'count' and a setter function 'setCount' 
  const [count, setCount] = useState(0); // 

  // Function to increment the count when the button is clicked 
  const handleClick = () => {
    // 4. Increment count on click
    // Using the functional update form of setCount to ensure we're using the latest state 
    setCount(prevCount => prevCount + 1); // 
  };

  return (
    <div>
      {/* 3. Show button: "Clicked X times" */}
      <button onClick={handleClick}> {/* Attaches the handleClick function to the button's click event  */}
        Clicked {count} times
      </button>
    </div>
  );
}

export default CounterButton;