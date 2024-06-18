import React from 'react';
import { Link } from 'react-router-dom'; // Si vous utilisez react-router pour la navigation
import './Header.css'; // Assurez-vous d'avoir le fichier CSS pour le style

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="favicon.ico" alt="Logo Pi Network" />
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
    
