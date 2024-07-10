import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const role = localStorage.getItem('storedRole');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">MUJARRAB HIG SCHOOL</Link>
          </div>
          <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
            <div className="navbar-start">
              <Link to="home" className="navbar-item">Home</Link>
              {role !== 'admin' && <Link to="/register" className="navbar-item">Register</Link>}

              {role !=='student'&& <Link to="/Main/teacher_list" className='navbar-item'>Teachers</Link>}
              {role !=='student'&& <Link to="/Main/student_list" className='navbar-item'>Students</Link>}
              {role !=='student'&& <Link to="/Main/subject_list" className='navbar-item'>Subject</Link>}

              <Link to="/about" className="navbar-item">About</Link>
              <Link to="/contact" className="navbar-item">Contact</Link>
              <li><Link to="/logout">Logout</Link></li>
            </div>
          </div>
          <div className="navbar-burger" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div className="school-image">
       <img src='MySchool.png' alt='schoolImage' className='school-image'></img>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src="comp.png" alt="CompRoom" className="Computer" />
          <h2>Computer room</h2>
          <p>This is our computer where our Student will learn about computer in different aspect so as to get understandi about compute technology</p>
        </div>
        <div className="card">
          <img src="place.png" alt="ReadingPlace" className="Reading" />
          <h2>Library</h2>
          <p>This is our place where our students get sufficiant material for their subject because we have more and modern material based on deffent career</p>
        </div>
        <div className="card">
          <img src="Lebo.png" alt="Lebo" className="Laboratory" />
          <h2>Laboratory</h2>
          <p>
            Also we fair-tressed good place and sufficiant material for our students for learning purpose so as to get complete knowledge and skills.
          </p>
        </div>
        <div className="card">
          <img src="gdn.jpeg" alt="Ourgarden" className="Garden" />
          <h2>School Garden</h2>
          <p>This is our school garden where our students can relax so as to refresh mind.</p>
        </div>
        <div className="card">
          <img src="DOM.png" alt="Dormitories" className="Place-of-sleep" />
          <h2>Dormitories(DOM)</h2>
          <p>This is the place where your child will sleep in happy and peace in a good attentiveness.</p>
        </div>
        <div className="card">
          <img src="Bus.png" alt="OurTransport" className="School-Bus" />
          <h3>School Bus</h3>
          <p>Enjoy good transport for fairgoing and safe travels.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
