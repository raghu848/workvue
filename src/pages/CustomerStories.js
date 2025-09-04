import React from 'react';
import './CustomerStories.css';

const CustomerStories = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Workveu transformed our sales process completely. We now track every lead from source to closure, and our conversion rates have increased by 40%.",
      name: "Mr. Amit Sharma",
      title: "Sales Head",
      company: "Prestige Group",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      quote: "The post-sales module is a game-changer. Our customer satisfaction scores improved dramatically, and we resolve queries 80% faster than before.",
      name: "Ms. Priya Patel",
      title: "Customer Relations Manager",
      company: "Lodha Group",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      quote: "As a broker, Workveu helps me manage multiple projects seamlessly. The lead scoring feature ensures I focus on the most promising prospects.",
      name: "Mr. Rajesh Kumar",
      title: "Founder",
      company: "Elite Properties",
      image: "/api/placeholder/80/80"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      client: "Skyline Developers",
      challenge: "Managing 200+ leads monthly across 3 projects with manual Excel system",
      solution: "Implemented complete Workveu ecosystem with automated lead management and post-sales tracking",
      results: [
        "40% increase in lead conversion",
        "50% reduction in follow-up time",
        "₹1.5Cr recovered in pending payments in Q1"
      ]
    },
    {
      id: 2,
      client: "Metro Realty",
      challenge: "Poor customer communication leading to complaints and delayed possessions",
      solution: "Deployed post-sales module with automated communication and complaint management",
      results: [
        "90% reduction in customer complaints",
        "Customer satisfaction score improved from 6.2 to 8.9",
        "100% on-time possession delivery"
      ]
    }
  ];

  return (
    <div className="customer-stories-page">
      <div className="container">
        {/* Header Section */}
        <section className="page-header">
          <h1>Success Stories That Inspire</h1>
          <p className="page-subtitle">
            Discover how leading real estate businesses are transforming their operations with Workveu
          </p>
        </section>

        {/* Video Testimonials Section */}
        <section className="video-testimonials">
          <h2>What Our Customers Say</h2>
          <div className="video-grid">
            <div className="video-card">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <img src="/api/placeholder/400/225" alt="Customer testimonial" />
              </div>
              <h4>Sales Head shares 3x growth story</h4>
              <p>Watch how Workveu helped achieve unprecedented sales growth</p>
            </div>
            <div className="video-card">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <img src="/api/placeholder/400/225" alt="Customer testimonial" />
              </div>
              <h4>Post-sales transformation journey</h4>
              <p>Customer relations manager discusses improved satisfaction scores</p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="testimonials-grid">
          <h2>Trusted by Industry Leaders</h2>
          <div className="testimonials">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.title}</span>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="case-studies">
          <h2>Detailed Case Studies</h2>
          <div className="case-studies-grid">
            {caseStudies.map(study => (
              <div key={study.id} className="case-study-card">
                <h3>{study.client}</h3>
                
                <div className="case-section">
                  <h4>The Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                
                <div className="case-section">
                  <h4>The Workveu Solution</h4>
                  <p>{study.solution}</p>
                </div>
                
                <div className="case-section">
                  <h4>The Results</h4>
                  <ul className="results-list">
                    {study.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40%</div>
              <div className="stat-label">Average Conversion Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80%</div>
              <div className="stat-label">Faster Query Resolution</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹50Cr+</div>
              <div className="stat-label">Payments Tracked Monthly</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join hundreds of successful real estate businesses already using Workveu</p>
            <button className="btn btn-primary">Start Your Journey Today</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerStories;