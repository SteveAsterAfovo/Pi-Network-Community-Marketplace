import React from 'react';
import './Terms.css'; // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const Terms = () => {
  return (
    <div className="terms">
      <div className="container">
        <h2>Conditions d'Utilisation</h2>
        <p>
          En accédant à Pi Network Marketplace, vous acceptez d'être lié par ces conditions d'utilisation, toutes les
          lois et réglementations applicables, et vous acceptez d'être responsable du respect de toutes les lois locales
          applicables.
        </p>
        <p>
          Si vous n'êtes pas d'accord avec une partie de ces termes, vous n'êtes pas autorisé à utiliser ou accéder à
          cette plateforme.
        </p>
        <p>
          L'utilisation de Pi Network Marketplace est soumise à notre politique de confidentialité.
        </p>
      </div>
    </div>
  );
};

export default Terms;
