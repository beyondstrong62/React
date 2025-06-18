// src/FeedbackForm.jsx

import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData]=useState({
    name:"",
    message:  "",
    rating :"5" // Default rating to 5
  })
  // Slide 9: Single state object for form data
  // const [formData, setFormData] = useState({
  //   name: '',
  //   message: '',
  //   rating: '5' // Default rating to 5
  // });

  // State to hold validation errors for each field
  const [errors, setErrors] = useState({});

  // Slide 13: State for conditional rendering of submission result
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); // To store the submitted data for display

  // Slide 9: Generic handleChange function for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure 'name' and 'value' from the input field that triggered the change
    setFormData(prevFormData => ({
      ...prevFormData, // Spread the existing formData to keep other fields unchanged
      [name]: value     // Update the specific field using its 'name' attribute as the key
    }));
    // Clear validation error for the field as user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Validation Logic (Client-side)
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    // Rating validation: ensure it's a number between 1 and 5
    const ratingNum = parseInt(formData.rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
        newErrors.rating = 'Please select a valid rating between 1 and 5.';
    }

    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Slide 10: Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload

    // Run validation
    const isValid = validateForm();

    if (isValid) {
      // If validation passes, process submission
      console.log('Feedback Submitted:', formData);
      setSubmissionResult(formData); // Store data to display below
      setIsSubmitted(true);         // Set flag to show result

      // In a real app, you'd send formData to a backend here.
      // Example using fetch (assuming your backend is at http://localhost:5000/api/feedback):
      /*
      fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      .then(response => {
          if (!response.ok) {
              return response.json().then(errorData => Promise.reject(errorData));
          }
          return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setSubmissionResult(data); // Assuming backend returns the saved data
        setIsSubmitted(true);
        // Clear form and errors
        setFormData({ name: '', message: '', rating: '5' });
        setErrors({});
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitted(false); // If submission fails, don't show success result
        setSubmissionResult(null); // Clear previous result
        alert(`Failed to submit feedback: ${error.message || 'Unknown error'}`); // Use alert for simple user feedback
      });
      */

      // For this local example, we'll just show the result without a fetch call
      setFormData({ // Clear the form after successful "submission"
        name: '',
        message: '',
        rating: '5'
      });
      setErrors({}); // Clear errors after successful submission

    } else {
      console.log('Form has validation errors.');
      setIsSubmitted(false); // Ensure result is hidden if there are errors
      setSubmissionResult(null); // Clear previous result
    }
  };

  // Slide 14: Helper function for dynamic class binding
  const getValidationClass = (fieldName) => {
    return errors[fieldName] ? 'error-input' : '';
  };

  return (
    <div className="feedback-container">
      <h2>Provide Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={getValidationClass('name')}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={getValidationClass('message')}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (1-5):</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className={getValidationClass('rating')}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
          {errors.rating && <p className="error-message">{errors.rating}</p>}
        </div>

        <button type="submit" className="submit-button">Submit Feedback</button>
      </form>

      {/* Slide 13: Conditional Rendering of result on submission */}
      {isSubmitted && submissionResult && (
        <div className="submission-result">
          <h3>Thank you for your feedback!</h3>
          <p><strong>Name:</strong> {submissionResult.name}</p>
          <p><strong>Message:</strong> {submissionResult.message}</p>
          <p><strong>Rating:</strong> {submissionResult.rating} out of 5</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;