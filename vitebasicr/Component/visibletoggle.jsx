import React from 'react';

// This is a very simple component to demonstrate toggling text visibility.
class SimpleToggle extends React.Component {
  // 1. Initialize state in the constructor.
  // 'visible' will control whether the text is shown or hidden.
  constructor(props) {
    super(props);
    this.state = {
      visible: true // Start with the text visible
    };
  }

  // 2. Method to update state using setState().
  // This method inverts the current 'visible' state.
  toggleVisibility = () => {
    // Calling setState to change the 'visible' property of the state.
    // The '!' (NOT) operator flips the boolean value (true to false, false to true).
    // This call will trigger React to re-render the component.
    this.setState({
      visible: !this.state.visible
    });
  };

  // 3. The render method outputs the UI.
  render() {
    return (
      <div style={{ padding: '20px', border: '1px solid gray', margin: '20px' }}>
        {/* A button that, when clicked, calls the toggleVisibility method */}
        <button onClick={this.toggleVisibility}>
          {/* Button text changes based on current visibility state */}
          {this.state.visible ? 'Hide Message' : 'Show Message'}
        </button>

        {/* Conditional rendering:
            The paragraph only renders if this.state.visible is true. */}
        {this.state.visible && (
          <p style={{ marginTop: '10px', color: 'blue' }}>
            Hello! This message can be toggled.
          </p>
        )}
      </div>
    );
  }
}

export default SimpleToggle; // Export the component to be used elsewhere
