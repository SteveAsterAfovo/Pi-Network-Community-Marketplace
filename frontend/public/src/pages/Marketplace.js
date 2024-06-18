import React, { useEffect, useState } from 'react';
import { getAllItems, createItem, updateItem, deleteItem } from '../services/itemService';

const Marketplace = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getAllItems();
        setItems(itemsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error.message);
      }
    };

    fetchItems();
  }, []);

  const handleCreateItem = async () => {
    const newItemData = {
      name: 'Nouvel article',
      description: 'Description de l\'article',
      price: 10.99,
      // Autres données pertinentes de l'article
    };

    try {
      const createdItem = await createItem(newItemData);
      setItems([...items, createdItem]);
      console.log('Nouvel article créé avec succès:', createdItem);
    } catch (error) {
      console.error('Erreur lors de la création d\'un nouvel article:', error.message);
    }
  };

  const handleUpdateItem = async (itemId) => {
    const updatedItemData = {
      name: 'Article mis à jour',
      description: 'Nouvelle description de l\'article',
      price: 15.99,
      // Autres données mises à jour de l'article
    };

    try {
      const updatedItem = await updateItem(itemId, updatedItemData);
      setItems(items.map(item => (item._id === updatedItem._id ? updatedItem : item)));
      console.log('Article mis à jour avec succès:', updatedItem);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'article:', error.message);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId);
      setItems(items.filter(item => item._id !== itemId));
      console.log('Article supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article:', error.message);
    }
  };

  return (
    <div>
      <h2>Marketplace</h2>
      <button onClick={handleCreateItem}>Créer un nouvel article</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <p>Nom: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Prix: {item.price} €</p>
            <button onClick={() => handleUpdateItem(item._id)}>Modifier</button>
            <button onClick={() => handleDeleteItem(item._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marketplace;
