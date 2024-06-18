import React from 'react';
import ItemList from '../components/ItemList';

const Marketplace = () => {
  const items = [
    {
      id: 1,
      name: 'Article 1',
      description: 'Description de l\'article 1',
      price: 10,
      image: 'url-to-image-1.jpg'
    },
    {
      id: 2,
      name: 'Article 2',
      description: 'Description de l\'article 2',
      price: 20,
      image: 'url-to-image-2.jpg'
    },
    {
      id: 3,
      name: 'Article 3',
      description: 'Description de l\'article 3',
      price: 30,
      image: 'url-to-image-3.jpg'
    }
    // Ajoute d'autres articles selon les besoins
  ];

  return (
    <div>
      <h2>Marketplace</h2>
      <ItemList items={items} />
    </div>
  );
};

export default Marketplace;
    
