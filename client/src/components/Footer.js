import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">About Us</NavLink></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} My App</p> 
      </div>
    </footer>
  );
};

export default Footer;
