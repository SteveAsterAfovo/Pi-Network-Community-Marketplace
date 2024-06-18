import React from 'react';
import ItemList from '../components/ItemList';
import './Marketplace.css'; // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const Marketplace = () => {
  const items = [
    {
      id: 1,
      name: 'T-shirt Pi Network',
      description: 'T-shirt officiel Pi Network. Disponible en différentes tailles et couleurs.',
      price: 15,
      image: 'https://example.com/t-shirt-image.jpg'
    },
    {
      id: 2,
      name: 'Service de consultation en Blockchain',
      description: 'Consultation professionnelle en technologie Blockchain et crypto-monnaies.',
      price: 50,
      image: 'https://example.com/blockchain-consultation.jpg'
    },
    {
      id: 3,
      name: 'Art numérique Pi',
      description: 'Art numérique créé par des artistes de la communauté Pi Network.',
      price: 25,
      image: 'https://example.com/digital-art.jpg'
    }
    // Ajoute d'autres articles selon les besoins
  ];

  return (
    <div className="marketplace">
      <div className="container">
        <h2>Explorez la Marketplace</h2>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Marketplace;
