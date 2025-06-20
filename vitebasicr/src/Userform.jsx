// src/ContactForm.jsx

import React, { useState } from 'react';

function ContactForm() {
  // Slide 9: Initialize a single state object for all form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Slide 9: Generic handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure 'name' and 'value' from the input field that triggered the change
    setFormData(prevFormData => ({
      ...prevFormData, // Spread the existing formData to keep other fields unchanged
      [name]: value     // Update the specific field using its 'name' attribute as the key
    }));
  };

  // Slide 10: Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser behavior of refreshing the page on form submission
    console.log('Form data submitted:', formData);
    // In a real application, you would typically send this formData to a backend server here.
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    alert(`Thank you, ${formData.name}! Your message has been sent.`); // Just for demonstration
    setFormData({ // Optionally, clear the form after submission
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name" // IMPORTANT: The 'name' attribute matches the key in formData
            value={formData.name} // The input's value is controlled by the state
            onChange={handleChange} // Call the generic handleChange on input change
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email" // IMPORTANT: The 'name' attribute matches the key in formData
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea
            id="message"
            name="message" // IMPORTANT: The 'name' attribute matches the key in formData
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;