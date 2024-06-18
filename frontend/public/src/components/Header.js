import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Pi Marketplace</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/profile">Profil</Link></li>
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
    
