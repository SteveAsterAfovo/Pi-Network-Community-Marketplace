// Exemple d'auth.js pour la gestion de l'authentification dans une application React

// Fonction pour enregistrer le token JWT dans le localStorage
export const login = (token) => {
  localStorage.setItem('token', token);
};

// Fonction pour supprimer le token JWT du localStorage
export const logout = () => {
  localStorage.removeItem('token');
};

// Fonction pour récupérer le token JWT du localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Fonction pour vérifier si l'utilisateur est authentifié (existe un token valide)
export const isAuthenticated = () => {
  const token = getToken();
  // Vérifie si le token existe et s'il est valide (peut inclure la vérification de la date d'expiration, etc.)
  return !!token; // Convertit en booléen (true si le token existe, false sinon)
};

// Fonction pour envoyer le token JWT avec chaque requête API (exemple d'utilisation des headers)
export const authHeader = () => {
  const token = getToken();
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  } else {
    return {};
  }
};

// Exemple de fonction pour gérer l'expiration du token JWT et déconnecter automatiquement l'utilisateur

// Fonction pour vérifier l'expiration du token et déconnecter l'utilisateur si nécessaire
export const checkTokenExpiration = () => {
  const token = getToken();
  if (!token) {
    return; // Pas de token, pas besoin de vérification
  }

  try {
    const decodedToken = jwt_decode(token); // Utilise jwt_decode pour décoder le token JWT (tu devras installer jwt-decode)
    const currentTime = Date.now() / 1000; // Temps actuel en secondes

    // Vérifie si le token a expiré en comparant avec le temps actuel
    if (decodedToken.exp < currentTime) {
      logout(); // Déconnecte l'utilisateur si le token a expiré
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'expiration du token:', error.message);
  }
};
  
