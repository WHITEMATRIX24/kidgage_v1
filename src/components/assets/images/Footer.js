import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import logoimage from './assets/images/logobw.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src={logoimage}
            alt="KIDGAGE"
            className="footer-logo-image"
          />
        </div>
        <div className="footer-links">
          <nav className="footer-nav">
            <a href="/about">About</a>
            <span className="separator">|</span>
            <a href="/terms">Terms & Conditions</a>
            <span className="separator">|</span>
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/contact">Contact Us</a>
            <span className="separator">|</span>
            <a href="/blog">Blog</a>
            <span className="separator">|</span>
            <a href="/careers">Careers</a>
          </nav>
          <div className="footer-copyright">
            Copyright ©2024 Kidgage
          </div>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;