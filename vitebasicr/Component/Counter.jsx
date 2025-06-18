// src/components/Counter.jsx

import React from 'react'; // Don't forget to import React when using class components

class Counter extends React.Component {
  // Constructor to initialize the state of the component.
  // The 'count' is set to 0.
  constructor(props) { // Constructor now accepts props, though not used in this simple example
    super(props);     // Always call super(props) in the constructor of a class component
    this.state = {
      count: 0 // Initial state: count is 0
    };
    // Binding the increment method to 'this' is crucial if not using arrow functions.
    // Using an arrow function for 'increment' (as below) automatically binds 'this'.
    // If 'increment' was a regular method: this.increment = this.increment.bind(this);
  }

  // Arrow function syntax ensures 'this' context is correctly bound to the component instance.
  // This method updates the 'count' in the state.
  increment = () => {
    // setState is the ONLY way to update state and trigger a re-render.
    // It takes an object that will be shallow-merged with the current state.
    this.setState({
      count: this.state.count + 1 // Increment the count by 1
    });
  };

  // The render method is required in a class component.
  // It returns the JSX that describes the component's UI.
  render() {
    // Access state properties using this.state.propertyName
    return (
      <div style={{
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '50px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <p style={{
          fontSize: '2em',
          fontWeight: 'bold',
          color: '#333'
        }}>Count: {this.state.count}</p>
        <button
          onClick={this.increment} // Attach the increment method to the button's click event
          style={{
            padding: '10px 20px',
            fontSize: '1.5em',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          +
        </button>
      </div>
    );
  }
}

// Export the component so it can be imported and used in other files.
export default Counter;
