// FeecdbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css'; 
const FeedbackForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    await fetch('https://feedback-form-bc1cc-default-rtdb.firebaseio.com/feedbackform.json',
    {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({ email, feedback
        })
    });
    onClose();
    
  };

  return (
    <div className="popup-container text-bg-light">
      <div className="close-btn" onClick={onClose}>&times;</div>
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit} method='POST'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br /><br />
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            required
          ></textarea><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
