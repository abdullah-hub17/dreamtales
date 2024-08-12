import React from "react";
import "../assets/styles/PricingSection.css";

const PricingSection = () => {
  return (
    <section className="pricing-section" id="pricingSection">
      <h2>Choose Your Plan</h2>
      <div className="pricing-table">
        <div className="pricing-option">
          <h3>Free</h3>
          <p>Three free stories per month with basic features.</p>
          <a href="#free" className="cta-button">
            Choose Free
          </a>
        </div>
        <div className="pricing-option premium">
          <h3>Premium Monthly</h3>
          <p>
            Unlimited stories, advanced customization options, and offline
            access.
          </p>
          <a href="#premium-monthly" className="cta-button">
            Upgrade to Premium
          </a>
        </div>
        <div className="pricing-option">
          <h3>Premium Yearly</h3>
          <p>All Premium features at a discounted yearly rate.</p>
          <a href="#premium-yearly" className="cta-button">
            Upgrade to Yearly
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;