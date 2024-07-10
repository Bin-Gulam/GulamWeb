import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    // Add your form submission logic here
    console.log('Form submitted:', { name, email, password, confirmPassword });

    // Navigate to login page after successful account creation
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Create Password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateAccount;
