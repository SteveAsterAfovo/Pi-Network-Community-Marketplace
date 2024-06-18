# Backend - Marketplace Communautaire de Pi Network

Ce dossier contient le backend pour la Marketplace Communautaire de Pi Network, développé avec Node.js et Express.js, et utilisant MongoDB comme base de données.

## [Structure du Projet](Backend_Structure)

- **`src/controllers/`**: Contient les contrôleurs pour gérer la logique métier.
- **`src/models/`**: Modèles de données pour MongoDB.
- **`src/routes/`**: Définition des routes de l'API.
- **`src/services/`**: Services utilitaires pour la logique métier.
- **`src/utils/`**: Fonctions utilitaires comme la gestion des erreurs et la validation des données.
- **`src/config/`**: Configuration de l'application, y compris la connexion à la base de données et la configuration d'Express.
- **`tests/`**: Tests unitaires et d'intégration pour assurer la qualité du code.

## Installation et Exécution

Pour installer et exécuter le backend localement, suivez ces étapes :

1. Clonez ce repository:

   ```bash
   git clone https://github.com/SteveAsterAfovo/Pi-Network-Community-Marketplace.git
   
2. Accédez au dossier backend
   ```bash
   cd SteveAsterAfovo/Pi-Network-Community-Marketplace/backend

3. Installez les dépendances:
   ```bash
   npm install

4.Configurez les variables d'environnement:

- Créez un fichier .env à la racine du dossier backend.
- Ajoutez les variables d'environnement nécessaires (par exemple, MongoDB URI, clés d'API).

5. Démarrez le serveur:
Le serveur backend démarrera sur http://localhost:3000.

## Documentation
Pour plus de détails sur l'architecture du backend, la logique métier et les routes API, consultez le code source dans le dossier `src/`.

## Tests
Assurez-vous d'exécuter les tests inclus pour vérifier que tout fonctionne correctement:
   ```bash
   npm test
```
## Contributions
Les contributions au développement de ce backend sont les bienvenues. Pour contribuer, suivez les bonnes pratiques et ouvrez une pull request avec vos modifications.

## Licence
Ce projet est sous licence MIT. Pour plus de détails, consultez le fichier LICENSE.
