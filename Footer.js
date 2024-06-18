import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© {new Date().getFullYear()} Pi Network Marketplace. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
