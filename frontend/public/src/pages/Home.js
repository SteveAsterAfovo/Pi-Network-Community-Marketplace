import React from 'react';
import './Home.css'; // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h2>Bienvenue sur la Marketplace de Pi Network</h2>
        <p>
          Découvrez une nouvelle façon d'acheter et de vendre des biens et des services en utilisant Pi,
          une crypto-monnaie décentralisée et sécurisée.
        </p>
        <p>
          Explorez notre marketplace où vous pouvez trouver une variété de produits uniques proposés par la
          communauté Pi. Chaque transaction renforce l'écosystème Pi et soutient ses utilisateurs.
        </p>
      </div>
    </div>
  );
};

export default Home;
