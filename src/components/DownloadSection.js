import React from "react";
import "../assets/styles/DownloadSection.css";
import { FaAndroid } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const DownloadSection = () => {
  return (
    <section className="download-section" id="download">
      <div className="download-content">
        <h2>Get DreamTales on your Device</h2>
        <p>
          Download the app for iOS or Android to start creating magical bedtime
          stories.
        </p>
        <div className="download-buttons">
          <a href="#ios-download" className="download-btn ios-btn">
            <FaApple className="ios-icon" />
            iOS
          </a>
          <a href="android-download" className="download-btn android-btn">
            <FaAndroid className="android-icon" />
            Android
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
