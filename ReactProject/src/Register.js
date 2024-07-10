import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentAddress: '',
    studentGender: '',
    studentAge: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const studentData = {
      studentName: formData.studentName,
      studentAddress: formData.studentAddress,
      studentGender: formData.studentGender,
      studentAge: formData.studentAge,
      email: formData.email,
      username: formData.username,
      password: formData.password
    };
    axios.post('http://localhost:8080/api/v1/student', studentData)
      .then(response => {
        console.log('Student registered successfully:', response.data);
        alert('You are successfully registered!');
      })
      .catch(error => {
        console.error('Error registering student:', error);
      });
  };

  return (
    <div className="registration-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Full Name:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          placeholder="Enter your full name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <label htmlFor="studentAddress">Address:</label>
        <input
          type="text"
          id="studentAddress"
          name="studentAddress"
          placeholder="Enter your address"
          value={formData.studentAddress}
          onChange={handleChange}
          required
        />

        <label htmlFor="studentGender">Gender:</label>
        <select
          id="studentGender"
          name="studentGender"
          value={formData.studentGender}
          onChange={handleChange}
          required
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="studentAge">Age:</label>
        <input
          type="number"
          id="studentAge"
          name="studentAge"
          placeholder="Enter your age"
          value={formData.studentAge}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Enter your password again"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
