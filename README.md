# Marketplace Communautaire de Pi Network

## Description

Une plateforme décentralisée permettant aux utilisateurs de Pi Network d'acheter et de vendre des biens et des services en utilisant Pi comme devise. Ce projet vise à renforcer l'utilité de Pi en tant que monnaie numérique et à créer une communauté plus solide autour de Pi Network.

## Fonctionnalités

- **Profils Utilisateurs et Réputation**
  - Création de profils utilisateurs avec système de réputation pour évaluer la fiabilité des vendeurs et des acheteurs.

- **Service d'Entiercement Sécurisé**
  - Mécanisme sécurisé pour garantir la réussite des transactions et la satisfaction des deux parties.

- **Système d'Évaluation**
  - Système de notation et de commentaire pour évaluer les transactions et les utilisateurs.

- **Intégration avec Pi Network**
  - Utilisation directe de Pi pour les transactions sur la plateforme, facilitée par une intégration fluide avec Pi Network.

## Technologies Utilisées

- **Frontend**
  - Framework: React.js
  - Bibliothèques UI: Bootstrap
  - Gestion d'État: Redux

- **Backend**
  - Framework: Node.js avec Express.js
  - Base de données: MongoDB
  - Contrats Intelligents: Utilisation du SDK Pi pour l'intégration blockchain (si disponible)

## Installation et Utilisation

Pour installer et exécuter localement ce projet, suivez ces étapes :

1. Cloner le repository:

   ```bash
   git clone https://github.com/SteveAsterAfovo/Pi-Network-Community-Marketplace.git

2. Installer les dépendances du frontend et du backend:

   ```bash
    cd SteveAsterAfovo/Pi-Network-Community-Marketplace/frontend
    npm install

   cd SteveAsterAfovo/Pi-Network-Community-Marketplace/backend
   npm install

3. Configurer la base de données MongoDB:

- Assurez-vous d'avoir une instance MongoDB en cours d'exécution.
- Configurez les variables d'environnement nécessaires dans backend/.env.

4. Démarrer le serveur backend et l'application frontend:

**Dans le dossier backend/**
npm start

**Dans le dossier frontend/**
npm start

5. Accédez à l'application dans votre navigateur à l'adresse http://localhost:3000.

## Documentation et Contribution
Pour plus de détails sur l'architecture du projet, les choix technologiques et la contribution au développement, consultez la documentation dans le dossier docs/.

Si vous souhaitez contribuer à ce projet, veuillez suivre les instructions dans [CONTRIBUTING.md](CONTRIBUTING.md) et ouvrir une pull request avec vos modifications.

## Licence
Ce projet est sous licence MIT. Pour plus de détails, consultez le fichier LICENSE.
