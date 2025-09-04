import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const openDemoModal = () => {
    setShowDemoModal(true);
  };

  const closeDemoModal = () => {
    setShowDemoModal(false);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Only Platform You Need to Sell & Deliver Real Estate.
            </h1>
            <p className="hero-subtitle">
              India's fastest-growing Real Estate CRM. Unify your pre-sales hustle and post-sales harmony to accelerate growth and build legendary brands.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={openDemoModal}>
                Request a Free Demo
              </button>
              <button className="btn btn-secondary">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="container">
          <p className="social-proof-text">
            Trusted by 500+ Leading Developers & Brokers Across India
          </p>
          <div className="client-logos">
            <div className="logo-item">Godrej Properties</div>
            <div className="logo-item">Macrotech Developers</div>
            <div className="logo-item">PropTiger</div>
            <div className="logo-item">Suncity Projects</div>
          </div>
        </div>
      </section>

      {/* Workveu Advantage Section */}
      <section className="advantage-section">
        <div className="container">
          <div className="advantage-grid">
            <div className="advantage-item">
              <div className="advantage-icon">📈</div>
              <h3>From Lead to Deal, 3x Faster</h3>
              <p>Automate lead capture, follow-ups, and site visits. Our intelligent pipeline management ensures your sales team closes deals, not gaps.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🤝</div>
              <h3>Flawless Customer Handover</h3>
              <p>Bridge the critical gap between sales and post-sales. Automate documentation, payment tracking, and customer communication for a seamless experience.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">📊</div>
              <h3>One Source of Truth</h3>
              <p>Get a unified dashboard for your entire business. Make data-driven decisions with real-time reports on sales performance, collections, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module Showcase Section */}
      <section className="module-showcase">
        <div className="container">
          <h2 className="section-title">A Complete Ecosystem for Real Estate Success</h2>
          <div className="module-grid">
            <div className="module-item">
              <h3>Pre-Sales: The Growth Engine</h3>
              <ul>
                <li>Lead Management</li>
                <li>Automated WhatsApp & Email Campaigns</li>
                <li>Site Visit Scheduling</li>
                <li>Sales Pipeline</li>
                <li>Agent Performance Tracking</li>
              </ul>
              <button className="btn btn-outline">Power Your Sales</button>
            </div>
            <div className="module-item">
              <h3>Post-Sales: The Trust Builder</h3>
              <ul>
                <li>Customer Portal</li>
                <li>Payment Tracking & Reminders</li>
                <li>Documentation Management</li>
                <li>Complaint Resolution</li>
                <li>Possession Management</li>
              </ul>
              <button className="btn btn-outline">Streamline Operations</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <blockquote className="testimonial">
            "Workveu's post-sales module transformed our customer satisfaction scores. We now resolve queries 80% faster, which directly improves our brand reputation."
          </blockquote>
          <div className="testimonial-author">
            <strong>Mr. Rajesh Sharma</strong><br />
            VP of Customer Relations, Elite Builders
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Lead the Market?</h2>
          <p>Join the hundreds of top-performing real estate businesses who trust Workveu.</p>
          <button className="btn btn-primary" onClick={openDemoModal}>
            Get Started Today - Request a Demo
          </button>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="modal-overlay" onClick={closeDemoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Request a Demo</h3>
              <button className="close-btn" onClick={closeDemoModal}>&times;</button>
            </div>
            <form className="demo-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Company Name" required />
              <select required>
                <option value="">Select Your Role</option>
                <option value="ceo">CEO</option>
                <option value="sales-head">Sales Head</option>
                <option value="marketing-head">Marketing Head</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Tell us about your requirements" rows="4"></textarea>
              <button type="submit" className="btn btn-primary">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;