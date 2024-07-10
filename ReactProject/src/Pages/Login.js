import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await axios.post(
        `http://localhost:8080/api/log/login?username=${username}&password=${password}`,
        {},
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      // Assuming the response contains the user data with a role
      const { role } = response.data;
      localStorage.setItem('storedRole', role);

      console.log('Login successful:', response.data);
      navigate('/home'); // Navigate to the dashboard upon successful login
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid username or password. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality not yet implemented.');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2>Welcome To Our School</h2>
      <img src="LOG.png" alt="Boarding Schools Management System Logo" className="logo" />

      <form id="loginForm" onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>
      </form>

      <div className="links">
        <a href="forgotPassword" onClick={handleForgotPassword}>Forgot Password?</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="createAccount" onClick={handleCreateAccount}>Create Account</a>
      </div>
    </div>
  );
};

export default Login;
