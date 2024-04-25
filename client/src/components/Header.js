import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router

const Header = () => {
  return (
    <header className="sticky-header">
      <nav className="nav-container">
        {/* Add your logo or website name here */}
        <div className="logo">
          <NavLink to="/"><h1>My App</h1></NavLink>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">About Us</NavLink></li>
          <li><NavLink to="/register" activeClassName="active-link">Register</NavLink></li>
          <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;