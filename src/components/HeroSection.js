import React from "react";
import "../assets/styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Magical Bedtime Stories for Sweet Dreams</h1>
        <p>
          Help your child unwind with personalized bedtime stories, crafted by
          AI to inspire sweet dreams.
        </p>
        <a href="#download" className="cta-button1">
          Download DreamTales
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
