# 🎉 API Blagues – Carambar & Co

Une API REST développée pour un projet personnel permettant de stocker et de récupérer des blagues façon “Carambar”.  
Le projet repose sur une architecture simple mais solide : Express.js pour le serveur, Sequelize pour la couche ORM, et SQLite pour la base de données.

---

## 📌 Pourquoi ce projet ?

- 🧠 Mettre en pratique un backend avec Node.js et une base de données locale  
- 🛠️ Construire une API RESTful propre, claire et versionnée  
- 🔄 Générer des blagues aléatoires ou ciblées grâce à des routes dédiées  
- ☁️ Déployer l’ensemble sur Render pour la partie API et GitHub Pages pour l’interface React  

---

## 🧰 Technologies utilisées

- **Node.js** : moteur JavaScript pour l’exécution côté serveur  
- **Express** : framework rapide et minimaliste pour gérer les routes  
- **Sequelize** : ORM facilitant l’interaction avec la base de données  
- **SQLite** : base embarquée idéale pour des projets légers  
- **TypeScript** : langage typé pour sécuriser le développement  
- **Swagger** : pour tester et documenter les routes de l’API  
- **Dotenv** : pour centraliser les variables sensibles
- **Taiwind CSS** : framework utilitaire pour un design rapide et responsive

---

## 📮 Liste des endpoints

| Méthode | URL              | Fonction                         |
|---------|------------------|----------------------------------|
| GET     | `/jokes`         | Renvoie toutes les blagues       |
| GET     | `/jokes/:id`     | Donne une blague selon un ID     |
| GET     | `/jokes/random`  | Sélectionne une blague au hasard |
| POST    | `/jokes`         | Permet d’enregistrer une blague  |

---

## 🌍 Accès en ligne

- 🖥️ Frontend : https://arnaud-dvg.github.io/carambar-joke-client/  
- 🔗 API : https://carambar-joke-server.onrender.com  
- 📘 Swagger : https://carambar-joke-server.onrender.com/api-docs/

---

## ⚙️ Lancer le projet en local

1. Cloner le dépôt :  
   `git clone https://github.com/arnaud-dvg/carambar-joke-server.git`  
   `cd carambar-joke-server`

2. Installer les modules :  
   `npm install`

3. Démarrer le serveur :  
   `npm run dev`

Le serveur s'exécute sur `http://localhost:3000` par défaut.

---

## 👨‍💻 Auteur

Développé avec humour et passion par **Arnaud DVG**  
🔗 https://github.com/arnaud-dvg
