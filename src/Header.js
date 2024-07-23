import React from 'react';
import { Link } from 'react-router-dom';
import travelLogo from './assets/travel.png'; 
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src={travelLogo} alt="Travel Logo" className="logo-image" />
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span>Call Us:</span>
            <span>+977-9861496355</span>
          </div>
          <div className="contact-item">
            <span>Location:</span>
            <span>Thali-4, Kathmandu</span>
          </div>
          <div className="contact-item">
            <span>E-mail us:</span>
            <span>sushantkhadka1111@gmail.com</span>
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><Link to="/" aria-label="Home">Home</Link></li>
          <li><Link to="/about" aria-label="About">About</Link></li>
          <li><Link to="/services" aria-label="Services">Services</Link></li>
          <li><Link to="/contact" aria-label="Contact">Contact</Link></li>
          <li><Link to="/domestic-tour" aria-label="Domestic Tour">Domestic Tour</Link></li>
          <li><Link to="/international-tour" aria-label="International Tour">International Tour</Link></li>
          <li><Link to="/signup" className="cta-button" aria-label="Get Started">Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
