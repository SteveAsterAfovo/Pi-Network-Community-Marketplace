import React from 'react';
import './About.css'; // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>À Propos de Pi Network</h2>
        <p>
          Pi Network est une plateforme décentralisée qui vise à permettre à tout individu de contribuer à la
          sécurité et à la croissance de la monnaie numérique Pi tout en laissant intacte l'intégrité de la blockchain.
        </p>
        <p>
          Notre mission est de construire une communauté de pionniers early adopters, qui peuvent préparer Pi pour
          la vie quotidienne, à l'instar d'Internet, qui en 1990 était à ses débuts.
        </p>
        <p>
          Explorez comment vous pouvez rejoindre cette mission et commencer à gagner Pi en contribuant à la plateforme.
        </p>
      </div>
    </div>
  );
};

export default About;
    
