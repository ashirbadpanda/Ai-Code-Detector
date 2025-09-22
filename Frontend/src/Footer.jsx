import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-year">@2025</span>
          <span className="footer-project">AI Code Detector</span>
        </div>
        <div className="footer-right">
          <a
            href="https://www.optizant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Designed & Developed by <strong>Optizant Pvt. Ltd.</strong>
          </a>
          <span className="footer-tagline">Driven By Excellence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;