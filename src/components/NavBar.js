import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">DreamTales</a>
      </div>
      <div className="mobile-menu-icon">
      <button onClick={toggleSidebar}><FaBars /></button>
      </div>
      <ul className={`navbar-links ${isSidebarOpen ? "open" : ""}`}>
        <li className="close-btn">
          <button onClick={closeSidebar}></button>
        </li>
        <li>
          <a className="items" href="#home" onClick={closeSidebar}>
            Home
          </a>
        </li>
        <li>
          <a className="items" href="#features" onClick={closeSidebar}>
            Features
          </a>
        </li>
        <li>
          <a className="items" href="#howitworks" onClick={closeSidebar}>
            Working
          </a>
        </li>
        <li>
          <a className="items" href="#pricingSection" onClick={closeSidebar}>
            Pricing
          </a>
        </li>
        <li>
          <a className="items" href="#testimonials" onClick={closeSidebar}>
            Testimonials
          </a>
        </li>
        <li>
          <a href="#download" className="cta-button" onClick={closeSidebar}>
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
