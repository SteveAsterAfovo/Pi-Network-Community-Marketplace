// Exemple de service pour la gestion des utilisateurs

// Fonction pour récupérer tous les utilisateurs depuis une API (simulée ici)
export const getAllUsers = async () => {
  try {
    // Remplacer par l'appel réel à une API
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des utilisateurs');
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Erreur dans getAllUsers:', error.message);
    throw error;
  }
};

// Fonction pour récupérer un utilisateur par son ID depuis une API (simulée ici)
export const getUserById = async (userId) => {
  try {
    // Remplacer par l'appel réel à une API avec l'ID spécifié
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Utilisateur avec l'ID ${userId} non trouvé`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(`Erreur dans getUserById pour l'ID ${userId}:`, error.message);
    throw error;
  }
};

// Fonction pour mettre à jour les informations d'un utilisateur
export const updateUser = async (userId, updatedUserData) => {
  try {
    // Remplacer par l'appel réel à une API pour mettre à jour l'utilisateur avec les données fournies
    const response = await fetch(`https://api.example.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    });
    if (!response.ok) {
      throw new Error(`Erreur lors de la mise à jour de l'utilisateur avec l'ID ${userId}`);
    }
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error(`Erreur dans updateUser pour l'ID ${userId}:`, error.message);
    throw error;
  }
};
