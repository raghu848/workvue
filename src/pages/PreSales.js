import React from 'react';
import './PreSales.css';

const PreSales = () => {
  return (
    <div className="presales-page">
      <div className="container">
        {/* Header Section */}
        <section className="page-header">
          <h1>Turn Every Inquiry into a Reliable Customer.</h1>
          <p className="page-subtitle">
            Capture, nurture, and convert leads with intelligent automation and unparalleled clarity.
          </p>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <h3>360° Lead Management</h3>
              <p>Aggregate leads from your website, Facebook, Instagram, WhatsApp, Magicbricks, 99acres, and more into a single, powerful dashboard.</p>
            </div>
            
            <div className="feature-card">
              <h3>AI-Powered Lead Scoring</h3>
              <p>Focus your team's energy on the hottest leads. Our system automatically ranks leads based on activity, source, and profile.</p>
            </div>
            
            <div className="feature-card">
              <h3>Automated Follow-Up Engine</h3>
              <p>Never let a lead go cold again. Automate personalized WhatsApp messages, emails, and call reminders based on lead behavior.</p>
            </div>
            
            <div className="feature-card">
              <h3>Seamless Site Visit Scheduling</h3>
              <p>Let prospects book site tours online. Automatically assign agents and sync with their calendars. Get real-time updates and feedback.</p>
            </div>
            
            <div className="feature-card">
              <h3>Visual Sales Pipeline</h3>
              <p>Drag-and-drop interface to track every deal from "New Lead" to "Booked." Forecast revenue with pinpoint accuracy.</p>
            </div>
            
            <div className="feature-card">
              <h3>Performance Analytics</h3>
              <p>Track individual agent performance, channel effectiveness, and conversion rates with beautiful, easy-to-understand reports.</p>
            </div>
          </div>
        </section>

        {/* Benefit Statement */}
        <section className="benefit-section">
          <div className="benefit-card">
            <blockquote>
              "With Workveu's Pre-Sales, our average conversion rate improved from 8% to 22% within six months."
            </blockquote>
            <cite>— Sales Director, Apex Realtors</cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Sales Process?</h2>
            <p>See how Workveu can revolutionize your pre-sales operations</p>
            <button className="btn btn-primary">See Pre-Sales in Action (Demo)</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreSales;