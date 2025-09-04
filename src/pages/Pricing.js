import React, { useState, useEffect } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [salesAgents, setSalesAgents] = useState(5);
  const [postSalesAgents, setPostSalesAgents] = useState(2);
  const [selectedPlan, setSelectedPlan] = useState('enterprise');
  const [totalCost, setTotalCost] = useState(0);

  const plans = {
    presales: {
      name: 'Pre-Sales Pro',
      price: 25000,
      features: [
        'Lead Management',
        'Pipeline Management',
        'Automated Follow-ups',
        'Basic Reports',
        '5 GB Storage'
      ],
      ideal: 'Ideal for Brokers & Small Teams'
    },
    enterprise: {
      name: 'Enterprise Builder',
      price: 35000,
      features: [
        'Everything in Pre-Sales Pro',
        'Post-Sales Module',
        'Advanced Analytics',
        'Customizable Workflows',
        'Priority Support',
        '50 GB Storage'
      ],
      ideal: 'Ideal for Mid to Large Developers',
      badge: 'BEST VALUE'
    },
    custom: {
      name: 'Custom',
      price: 'Contact',
      features: [
        'Dedicated Account Manager',
        'API Access',
        'Custom Development',
        'Onboarding & Training',
        'Unlimited Storage'
      ],
      ideal: 'For large organizations with complex needs'
    }
  };

  useEffect(() => {
    if (selectedPlan === 'presales') {
      setTotalCost(salesAgents * plans.presales.price);
    } else if (selectedPlan === 'enterprise') {
      setTotalCost((salesAgents + postSalesAgents) * plans.enterprise.price);
    }
  }, [salesAgents, postSalesAgents, selectedPlan]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="pricing-page">
      <div className="container">
        {/* Header Section */}
        <section className="page-header">
          <h1>Simple, Predictable Pricing.</h1>
          <p className="page-subtitle">
            One powerful platform, flexible plans. All priced annually per user. Start for free, scale as you grow.
          </p>
        </section>

        {/* Pricing Plans */}
        <section className="pricing-plans">
          <div className="plans-grid">
            {Object.entries(plans).map(([key, plan]) => (
              <div key={key} className={`plan-card ${selectedPlan === key ? 'active' : ''} ${plan.badge ? 'featured' : ''}`}>
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {typeof plan.price === 'number' 
                    ? `${formatCurrency(plan.price)}/user/year`
                    : plan.price
                  }
                </div>
                <p className="plan-ideal">{plan.ideal}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {key !== 'custom' && (
                  <button 
                    className={`btn ${selectedPlan === key ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    {selectedPlan === key ? 'Selected' : 'Select Plan'}
                  </button>
                )}
                {key === 'custom' && (
                  <button className="btn btn-outline">
                    Contact Sales
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="cost-calculator">
          <div className="calculator-card">
            <h2>See the value for your team.</h2>
            
            <div className="calculator-inputs">
              <div className="input-group">
                <label>Number of Sales Agents: {salesAgents}</label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={salesAgents}
                  onChange={(e) => setSalesAgents(parseInt(e.target.value))}
                  className="slider"
                />
                <div className="slider-labels">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>

              {selectedPlan === 'enterprise' && (
                <div className="input-group">
                  <label>Number of Post-Sales Agents: {postSalesAgents}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="20" 
                    value={postSalesAgents}
                    onChange={(e) => setPostSalesAgents(parseInt(e.target.value))}
                    className="slider"
                  />
                  <div className="slider-labels">
                    <span>0</span>
                    <span>20+</span>
                  </div>
                </div>
              )}

              <div className="input-group">
                <label>Select your plan:</label>
                <select 
                  value={selectedPlan} 
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="plan-select"
                >
                  <option value="presales">Pre-Sales Pro</option>
                  <option value="enterprise">Enterprise Builder</option>
                </select>
              </div>
            </div>

            <div className="calculator-result">
              <h3>Your Estimated Annual Investment:</h3>
              <div className="total-cost">{formatCurrency(totalCost)}</div>
              <p>That's just {formatCurrency(Math.round(totalCost / 12))} per month for a team of your size!</p>
              <button className="btn btn-primary">Get a Detailed Quote</button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>What's included in the setup?</h4>
              <p>Complete onboarding, data migration, team training, and 30 days of dedicated support.</p>
            </div>
            <div className="faq-item">
              <h4>How secure is our data?</h4>
              <p>Bank-grade security with 256-bit encryption, regular backups, and compliance with Indian data protection laws.</p>
            </div>
            <div className="faq-item">
              <h4>Can we cancel anytime?</h4>
              <p>Yes, with 30 days notice. We'll help you export your data safely.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer discounts for larger teams?</h4>
              <p>Yes! Contact our sales team for volume discounts on teams of 25+ users.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;