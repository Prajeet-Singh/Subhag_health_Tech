import React, { useState } from 'react';
import './Navbar.css';
import Logo from "../../../assets/logo.png";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src = {Logo} alt="Logo" />
        {/* <span>My Website</span> */}
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#services">IUI Insights</a>
        </li>
        <li>
          <a href="#services">Certifications</a>
        </li>
        <li>
          <a href="#services">Blog</a>
        </li>
        <li>
          <a href="#services">Contact</a>
        </li>
      </ul>
      <button className="order-now-btn">Order Now</button>
      <div className={`burger ${isMobileMenuOpen ? 'burger-open' : ''}`} onClick={toggleMobileMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
