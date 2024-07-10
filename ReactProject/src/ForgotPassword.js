import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="container">
      <h1>Forgot Password</h1>
      <form>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required />
          <label htmlFor="dob">Enter new password:</label>
          <input type="Password" id="NewPassword" name="NewPassword" placeholder="Enter New Password" required/>
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <div className="link">
        <a href="#">Login again</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
