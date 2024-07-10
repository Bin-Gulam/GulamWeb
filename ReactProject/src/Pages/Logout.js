import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('authToken');
    navigate('/');
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>You have been logged out.</h2>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default Logout;
