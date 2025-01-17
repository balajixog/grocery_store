// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';
import logo from '../assets/Box Delivery Service (1).png'; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="QuickBox" />
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/categories">Categories</a>
          <a href="/products/groceries">Groceries</a>
         
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/profile">Profile</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} QuickBox. All rights reserved.</p>
          <p>123 Main Street, City, Country</p>
          <p>Email: support@quickbox.com | Phone: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
