import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../services/userService';

const Profile = () => {
  const [user, setUser] = useState(null);
  const userId = 'user123'; // Exemple d'ID utilisateur à récupérer

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error.message);
      }
    };

    fetchUser();
  }, [userId]);

  const handleUpdateUser = async () => {
    const updatedUserData = { ...user, email: 'new.email@example.com' }; // Exemple de données mises à jour
    try {
      const updatedUser = await updateUser(userId, updatedUserData);
      setUser(updatedUser);
      console.log('Utilisateur mis à jour avec succès:', updatedUser);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error.message);
    }
  };

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>Profil de {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Localisation: {user.location}</p>
      <button onClick={handleUpdateUser}>Mettre à jour l'email</button>
    </div>
  );
};

export default Profile;
