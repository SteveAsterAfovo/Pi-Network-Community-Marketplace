import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Pi Marketplace. Tous droits réservés.</p>
        </div>
        <div className="footer-center">
          <ul>
            <li><Link to="/privacy">Politique de confidentialité</Link></li>
            <li><Link to="/terms">Conditions d'utilisation</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    
