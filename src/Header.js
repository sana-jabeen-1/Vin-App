import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the custom CSS file
import logo from './Vin-Me-Now-LOGO-F.png';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img
              src={logo} // Replace with your logo path
              alt="Auto Audit Pro"
            />
          </Link>
        </div>

        {/* Navigation Links and Contact Button Container */}
        <div className="nav-button-container">
          <nav className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about-us" className="nav-item">About Us</Link>
          </nav>

          {/* Contact Us Button */}
          <div className="contact-button">
            <Link to="/contact-us">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
