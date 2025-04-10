[Argent-Bank](./Argent-Banque-Front-End/src/assets/argentBankLogo.png)


![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ArthurBlanc)
[![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)


Objectifs:
Écrire des appels à l'API REST pour connecter le front au back et modéliser une API.


Phase 1: Créer un système d'authentification

Phase 2: Modéliser l'API pour la gestion des transactions


Compétences évaluées :
- Implémenter un gestionnaire de "states" dans une application React avec Redux et Redux Toolkit et RTK Query
- S'authentifier à une API
- Interagir avec une API
- Modéliser une API

Situation du projet :
Vous êtes Développeur Front-end dans une agence spécialisée dans le développement d’applications web. Votre mission est de mettre en place l'application de votre nouveau client: ARGENT BANK. Le projet se décompose en deux phases :

Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.

Phase 2 : Transactions - Spécifier les endpoints d’API nécessaires pour la gestion des transactions par client, par compte, par date...


Phase 1 :
Contraintes techniques :
Créer l’application web (responsive) avec React, le HTML statique et le CSS est fourni pour la page d'accueil, la page de connexion et la page de profil.

Utiliser Redux pour gérer le state de l'application.

Contraintes fonctionnelles :
- L'utilisateur peut visiter la page d'accueil
- L'utilisateur peut se connecter au système
- Accéder à la page de connexion (/login)
- Remplir le formulaire de connexion avec ses identifiants
- Demander à l'application de mémoriser identifiant et mot de passe
- Se connecter à l’application en utilisant des jetons JWT pour l'authentification
- Naviguer avec succès vers la page de profil (/profile)
- L'utilisateur ne peut pas voir les informations relatives à son profil s'il n'est pas connecté
- Accéder à la page de profil (/profile)
- Afficher le prénom sur la page de profil
- Afficher les informations de compte bancaire
- L'utilisateur peut modifier le profil (nom et prénom) et conserver les données dans la base de données.
- L'utilisateur peut se déconnecter du système
- Le bouton de déconnexion s'affiche une fois connecté
- Cliquer sur le bouton de déconnexion déconnecte l’utilisateur et celui-ci est redirigé vers la page d'accueil


Phase 2 :

Contraintes techniques :

-Utilisation du format YAML et de Swagger pour visualiser les futurs endpoints de l'API pour gérer toute la partie transaction de l'application

Endpoints :

Transactions, nous sommes encore en phase de conception. Nous mettons au point une fonctionnalité pour les transactions, qui doit pouvoir permettre aux utilisateurs : - de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ; - de visualiser les détails d'une transaction dans une autre vue d'ajouter, de modifier ou de supprimer des informations sur une transaction (on ne supprimera ou n'ajoutera pas de transaction). - Chaque Transaction comprend les propriétés suivants : -Id - userId -Date -Type - Catégorie - Montant - Balance - Notes - Description

Branche Main:
utilisation de Redux et de Redux Toolkit (createAsyncThunk et createSlice)

Branche createApi:
dans l'optique d'une mise en production de la phase 2, et donc de l'augmentation des appels à l'API, j'ai travaillé sur cette branche avec RTK Query et createApi, afin de centraliser les queries et mutations dans un seul et même fichier, et de diminuer la quantité d'informations que l'on stocke dans le state pour préférer une gestion en cache.

Installation :
Prérequis :
Git
Node.js v12
MongoDB Community Server
Dépendances :
React: ^18.2.0
React-router-dom: 6.10.0
React-redux: 8.1.3
Redux: 4.2.1
@reduxjs/toolkit: 1.9.7
Procédure d'installation :
Cloner le repository:

https://github.com/Claude-OpenClassRoom/Bank-Argent
Installation et lancement du Back-end :
Aller dans le dossier "Back"

Vérifier la version de Node:

node --version
Vérifier la version de MongoDB
mongo --version
Installer toutes les dépendances pour le back-end:
npm install ou yarn
Lancer le back-end (port 3001 par défaut) avec Node 12:
nvm use 12

npm run dev:server

Créer deux utilisateurs dans la DB:
npm run populate-db
Utilisateurs en base de données:

Tony Stark :
First Name: Tony
Last Name: Stark
Email: tony@stark.com
Password: password123

Steve Rogers :
First Name: Steve,
Last Name: Rogers,
Email: steve@rogers.com,
Password: password456 

API Documentation
Pour en apprendre plus sur le fonctionnement de l'API, une fois l'environnement local lancé, visitez: http://localhost:3001/api-docs

Installation et lancement du front-end :
Aller dans le dossier "Front"

Installer toutes les dépendances pour le front-end:

npm install
Lancer le front-end:
npm start
Le front-end sera lancé à l'URL: http://localhost:3000/

Développé avec :
Visual Studio Code
React 18
Create React App
React Router V6
Redux - Bibliothèque JS de gestion d'état pour applications web
GitHub - Outil de gestion de versions