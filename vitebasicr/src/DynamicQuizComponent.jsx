// src/components/DynamicQuizComponent.jsx
import React, { useState } from 'react';

function DynamicQuizComponent() {
  const [showAnswer, setShowAnswer] = useState(false); // Manages visibility of the answer
  const [showExplanation, setShowExplanation] = useState(false); // Manages visibility of the explanation

  const question = "What is the capital of France?";
  const answer = "Paris";
  const explanation = "Paris is known as the 'City of Light' and is a major European city.";

  return (
    <div className="example-container">
      <h4>Slide 12: Activity – Dynamic Quiz Component</h4>

      <p><strong>Question:</strong> {question}</p>

      {/* Button to toggle answer visibility */}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>

      {/* Conditionally render the answer using ternary operator */}
      {showAnswer ? ( //
        <p style={{ marginTop: '10px', fontWeight: 'bold', color: 'green' }}>
          Answer: {answer}
        </p>
      ) : (
        <p style={{ marginTop: '10px', fontStyle: 'italic', color: 'gray' }}>
          (Answer hidden)
        </p>
      )}

      {/* Button to toggle explanation visibility */}
      <button onClick={() => setShowExplanation(!showExplanation)} style={{ marginLeft: '10px' }}>
        {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
      </button>

      {/* Conditionally render the explanation using logical AND (&&) */}
      {showExplanation && ( //
        <div style={{
          marginTop: '10px',
          padding: '10px',
          backgroundColor: '#f0f8ff',
          borderLeft: '4px solid #add8e6',
          borderRadius: '4px'
        }}>
          <strong>Explanation:</strong> {explanation}
        </div>
      )}

      <p style={{marginTop: '20px', fontSize: '0.9em', color: '#555'}}>
        **Brief for Slides:**
        <br/>- Uses `useState` to manage `showAnswer` and `showExplanation` states.
        <br/>- Employs the **ternary operator (`? :`)** to conditionally display the answer.
        <br/>- Uses the **logical AND (`&&`) operator** to conditionally display the explanation.
        <br/>- Buttons dynamically change their text based on the current state.
      </p>
    </div>
  );
}

export default DynamicQuizComponent;