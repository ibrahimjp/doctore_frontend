
import React, { useState, useEffect } from 'react';
import './Price.css';

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeButton, setActiveButton] = useState('monthly');
  const [faqActive, setFaqActive] = useState(null);

  const toggleBilling = (period) => {
    setIsYearly(period === 'yearly');
    setActiveButton(period);
  };

  const redirectToPayment = (plan) => {
    window.location.href = `payment.html?plan=${plan}`;
  };

  const handleFaqClick = (index) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const updatePrices = () => {
    const prices = {
      monthly: {
        basic: "$0",
        plus: "$29",
        premium: "$59",
        sub: "PER MONTH, BILLED MONTHLY"
      },
      yearly: {
        basic: "$0",
        plus: "$290",
        premium: "$590",
        sub: "PER YEAR, BILLED YEARLY"
      }
    };
    return prices[isYearly ? 'yearly' : 'monthly'];
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!fullName || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  // Particle effect logic from the original JS
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      const particleCount = 20;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `
          floatUp ${duration}s linear ${delay}s infinite,
          fadeInOut ${duration / 2}s ease-in-out ${delay}s infinite alternate
        `;
        particlesContainer.appendChild(particle);
      }

      const style = document.createElement('style');
      style.textContent = `
        @keyframes floatUp { 0% { transform: translateY(0) translateX(0); } 25% { transform: translateY(-30px) translateX(10px); } 50% { transform: translateY(-60px) translateX(-10px); } 75% { transform: translateY(-90px) translateX(5px); } 100% { transform: translateY(-120px) translateX(-5px); } }
        @keyframes fadeInOut { 0%, 100% { opacity: 0; } 50% { opacity: 0.7; } }
      `;
      document.head.appendChild(style);
    };

    createParticles();
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const prices = updatePrices();
  const faqData = [
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel anytime from your account settings. After cancellation, you'll still have access until the end of your current billing period."
    },
    {
      question: "Is my medical data secure with MediConnect?",
      answer: "Absolutely. We use bank-level encryption and comply with all healthcare privacy regulations (HIPAA, GDPR) to ensure your data remains completely secure and private."
    },
    {
      question: "How quickly can I get a doctor consultation?",
      answer: "With our PLUS and Premium plans, you can typically connect with a healthcare professional within minutes. Basic users may experience longer wait times during peak hours."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. Downgrades will take effect at your next billing cycle."
    },
    {
      question: "Do you offer family plans?",
      answer: "Our Premium plan includes coverage for up to 4 family members. You can add family members through your account dashboard after subscription."
    }
  ];

  return (
    <>
      <div className="mesh-bg" aria-hidden="true">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="blob b4"></div>
        <div className="blob b5"></div>
        <div className="blob b6"></div>
      </div>
      <div className="floating-circle circle-1" aria-hidden="true"></div>
      <div className="floating-circle circle-2" aria-hidden="true"></div>
      <div className="floating-circle circle-3" aria-hidden="true"></div>
      
      <div className="container">
        <div className="pricing-header">
          <h5>PRICINGS</h5>
          <h2>PLUS?</h2>
          <div className="toggle-container">
            <div className="toggle">
              <button
                className={activeButton === 'monthly' ? 'active' : ''}
                onClick={() => toggleBilling('monthly')}
              >
                Monthly
              </button>
              <button
                className={activeButton === 'yearly' ? 'active' : ''}
                onClick={() => toggleBilling('yearly')}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <section className="pricing-section">
          {/* ... Pricing cards with dynamic content ... */}
          <div className="pricing-card">
            <div className="bubble"></div>
            <h3>BASIC</h3>
            <p>Essential healthcare access.</p>
            <div className="price">{prices.basic}</div>
            <div className="price-sub">{prices.sub}</div>
            <button className="btn btn-dark" onClick={() => redirectToPayment('basic')}>Get Started</button>
            <ul className="features">
              <li>Browse doctor profiles</li>
              <li>Read reviews and ratings</li>
              <li>Basic AI assistant (3 queries/day)</li>
              <li>Medicine price comparison</li>
              <li>Community health articles</li>
            </ul>
          </div>
          <div className="pricing-card">
            <span className="badge">Most Popular</span>
            <div className="bubble bubble-2"></div>
            <h3>MediConnect PLUS</h3>
            <p>Premium healthcare experience</p>
            <div className="price">{prices.plus}</div>
            <div className="price-sub">{prices.sub}</div>
            <button className="btn btn-light" onClick={() => redirectToPayment('plus')}>Get Started</button>
            <ul className="features">
              <li>All basic features</li>
              <li>Unlimited AI assistant access</li>
              <li>Priority booking (jump the queue)</li>
              <li>Instant chat with doctors</li>
              <li>24/7 phone support hotline</li>
              <li>Free medicine delivery</li>
              <li>Health tracking dashboard</li>
              <li>Exclusive webinars & content</li>
              <li>Monthly health check reminders</li>
              <li>30% discount on consultations</li>
            </ul>
          </div>
          <div className="pricing-card">
            <div className="bubble bubble-3"></div>
            <h3>Premium Care</h3>
            <p>Complete healthcare solution.</p>
            <div className="price">{prices.premium}</div>
            <div className="price-sub">{prices.sub}</div>
            <button className="btn btn-dark" onClick={() => redirectToPayment('premium')}>Get Started</button>
            <ul className="features">
              <li>All PLUS features</li>
              <li>Dedicated personal health advisor</li>
              <li>Unlimited free consultations</li>
              <li>Home visit arrangements</li>
              <li>Specialist referrals included</li>
              <li>Advanced health analytics</li>
              <li>Family plan (up to 4 members)</li>
              <li>Emergency consultation access</li>
              <li>Prescription management</li>
              <li>Annual health checkup package</li>
            </ul>
          </div>
        </section>

        <section className="features-section">
          <div className="feature-box">
            <div className="icon-container pulse-icon">
              <div className="icon-bg"></div>
              <div className="icon"><i className="fas fa-headset"></i></div>
            </div>
            <h3>Premium Support</h3>
            <p>24/7 medical support and emergency consultation access</p>
          </div>
          <div className="feature-box">
            <div className="icon-container rotating-icon">
              <div className="icon-bg"></div>
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
            </div>
            <h3>Health Tracking</h3>
            <p>Advanced analytics and personalized health insights</p>
          </div>
          <div className="feature-box">
            <div className="icon-container particle-icon">
              <div className="icon-bg"></div>
              <div className="icon"><i className="fas fa-robot"></i></div>
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </div>
            <h3>Unlimited AI</h3>
            <p>Chat with our medical AI assistant without limits</p>
          </div>
        </section>

        <section className="faq-section">
          <div className="faq-container">
            <div className="faq-left">
              <div className="subtitle">ANSWERS</div>
              <div className="title">FAQs</div>
            </div>
            <div className="faq-right">
              {faqData.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`faq-item ${faqActive === index ? 'active' : ''}`}
                    onClick={() => handleFaqClick(index)}
                  >
                    <h3>{item.question}</h3>
                    <div className="plus">+</div>
                  </div>
                  <div
                    className="faq-answer"
                    style={{ maxHeight: faqActive === index ? '200px' : '0' }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-header">
            <h5>CONTACT</h5>
            <h2>GET IN TOUCH</h2>
          </div>
          <div></div>
          <div className="contact-info">
            <div className="info-group">
              <h3>Contact</h3>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div className="info-text">hello@heliumtemplate.com</div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <div className="info-text">+1 (800) 123-4567</div>
              </div>
              <div className="info-item">
                <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div className="info-text">
                  123 Innovation Drive, Suite 400<br />
                  San Francisco, CA 94107<br />
                  United States
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="particles" id="particles"></div>
            <form onSubmit={handleContactFormSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" className="form-control" defaultValue="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" className="form-control" defaultValue="All innovations Inc." />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" defaultValue="john.doe@alagency.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" defaultValue="Hello! I'd like to learn more about your AI automation services."></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Price;