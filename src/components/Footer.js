import React from "react";
import "../assets/styles/Footer.css";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="extra">
        <div className="subscribe">
          <h2>Subscribe Us</h2>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
        </div>
        <div className="social-icons">
          <h2>Follow Us</h2>
          <div className="extra2">
            <a href="#facebook">
              <MdOutlineFacebook />
            </a>
            <a href="#LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#instagram">
              <FaInstagramSquare />
            </a>
            <a href="#Github">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <p>&copy; 2024 DreamTales. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
