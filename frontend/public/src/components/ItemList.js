import React from 'react';
import './ItemList.css'; // Assure-toi de créer et styliser ce fichier CSS selon tes besoins

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.id}>
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">{item.price} Pi</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
