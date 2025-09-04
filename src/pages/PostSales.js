import React from 'react';
import './PostSales.css';

const PostSales = () => {
  return (
    <div className="postsales-page">
      <div className="container">
        {/* Header Section */}
        <section className="page-header">
          <h1>Deliver Dreams, Not Delays.</h1>
          <p className="page-subtitle">
            Transform your post-sales process from a cost center into your strongest brand-building tool.
          </p>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Centralized Customer Database</h3>
              <p>A complete history of every customer—from first inquiry to final possession—accessible to authorized teams in seconds.</p>
            </div>
            
            <div className="feature-card">
              <h3>Automated Payment Tracking</h3>
              <p>Send automatic payment reminders and updates. Track cheques, NACH, and online payments. Generate outstanding payment reports instantly.</p>
            </div>
            
            <div className="feature-card">
              <h3>Document Management Portal</h3>
              <p>A secure, cloud-based vault for all documents—agreements, forms, NOCs—accessible to customers and your team, reducing endless email chains.</p>
            </div>
            
            <div className="feature-card">
              <h3>Integrated Complaint Management</h3>
              <p>Log, assign, and track customer queries and complaints. Ensure timely resolution and maintain a complete audit trail.</p>
            </div>
            
            <div className="feature-card">
              <h3>Customer Communication Hub</h3>
              <p>Send bulk updates on construction progress, event invitations, and policy changes via WhatsApp and Email, all from within the platform.</p>
            </div>
            
            <div className="feature-card">
              <h3>Possession & Handover Suite</h3>
              <p>Manage the entire possession process smoothly, from generating checklists to scheduling handover dates.</p>
            </div>
          </div>
        </section>

        {/* Benefit Statement */}
        <section className="benefit-section">
          <div className="benefit-card">
            <blockquote>
              "We reduced our average query resolution time from 5 days to 24 hours. Our customers are now our biggest advocates."
            </blockquote>
            <cite>— Post-Sales Head, Skyline Developers</cite>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Enhance Customer Experience?</h2>
            <p>Discover how Workveu can transform your post-sales operations</p>
            <button className="btn btn-primary">Discover Post-Sales Excellence (Demo)</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostSales;