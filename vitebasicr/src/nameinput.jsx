import React, { useState } from 'react'; // Imports React and the useState hook

function NameInput() {
  const [name, setName] = useState(''); // Declares a state variable 'name' initialized to an empty string, and its setter function 'setName'

  return (
    <input
      value={name} // Binds the input's displayed value to the 'name' state
      onChange={(e) => setName(e.target.value)} // Updates the 'name' state whenever the input value changes
    />
  );
}

export default NameInput;