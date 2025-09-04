import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container" style={{width: '100%'}}>
        <div className="nav-logo">
          <h2>Workveu</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#product" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Product
          </a>
          <a href="#pre-sales" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Pre-Sales
          </a>
          <a href="#post-sales" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Post-Sales
          </a>
          <a href="#solutions" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Solutions
          </a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </a>
          <a href="#customer-stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Customer Stories
          </a>
          <a href="#resources" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Resources
          </a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
          <a href="#contact" className="nav-link demo-btn" onClick={() => setIsMenuOpen(false)}>
            Request Demo
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;