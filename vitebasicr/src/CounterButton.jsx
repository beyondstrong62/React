import React, { useState } from 'react'; // 

function CounterButton() {
  // 1. Initial count = 0
  // useState Hook to declare a state variable 'count' and a setter function 'setCount' 
  const [count, setCount] = useState(0); // 

  // Function to increment the count when the button is clicked 
  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // 
  };
  return (
    <div>
      <button onClick={handleClick}> 
        Clicked {count} times
      </button>
    </div>
  );
}

export default CounterButton;