const BASE_URL = 'https://api.example.com'; // Remplace par l'URL de ton API backend

// Fonction générique pour effectuer une requête HTTP
const apiRequest = async (url, method = 'GET', body = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Ajoute d'autres headers si nécessaire comme des tokens d'authentification
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur dans apiRequest:', error.message);
    throw error;
  }
};

// Exporte les fonctions d'API nécessaires pour les différentes opérations
export const getAll = async (resource) => {
  try {
    const data = await apiRequest(`/${resource}`);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de tous les ${resource}:`, error.message);
    throw error;
  }
};

export const getById = async (resource, id) => {
  try {
    const data = await apiRequest(`/${resource}/${id}`);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération de ${resource} avec l'ID ${id}:`, error.message);
    throw error;
  }
};

export const create = async (resource, newData) => {
  try {
    const data = await apiRequest(`/${resource}`, 'POST', newData);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la création d'un nouveau ${resource}:`, error.message);
    throw error;
  }
};

export const update = async (resource, id, updatedData) => {
  try {
    const data = await apiRequest(`/${resource}/${id}`, 'PUT', updatedData);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de ${resource} avec l'ID ${id}:`, error.message);
    throw error;
  }
};

export const remove = async (resource, id) => {
  try {
    await apiRequest(`/${resource}/${id}`, 'DELETE');
    return true; // Succès de la suppression
  } catch (error) {
    console.error(`Erreur lors de la suppression de ${resource} avec l'ID ${id}:`, error.message);
    throw error;
  }
};
