import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">Workveu</h3>
            <p className="footer-tagline">
              The Complete Real Estate Operating System
            </p>
            <p className="footer-description">
              Empowering builders and brokers to dominate the market with seamless pre-sales and post-sales operations.
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#pre-sales">Pre-Sales Module</a></li>
              <li><a href="#post-sales">Post-Sales Module</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="footer-section">
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li><a href="#builders">For Builders</a></li>
              <li><a href="#brokers">For Brokers</a></li>
              <li><a href="#developers">For Developers</a></li>
              <li><a href="#agencies">For Agencies</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#webinars">Webinars</a></li>
              <li><a href="#customer-stories">Customer Stories</a></li>
              <li><a href="#help-center">Help Center</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <p>📧 hello@workveu.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, India</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security</a>
              <a href="#gdpr">GDPR</a>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2024 Workveu. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;