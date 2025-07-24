# 🎉 API Blagues – Carambar & Co  

---

## Mini API REST conçue dans le cadre d’un projet de sélection | CDA

Permettant de gérer une liste de blagues façon "Carambar", avec un backend en **Node.js**, **Express**, **Sequelize** et **SQLite**.

---

## 📌 Objectifs du projet  

- Démontrer la maîtrise de la stack Node.js / Express avec base SQLite  
- Créer une API versionnée et documentée  
- Renvoyer des blagues aléatoires ou ciblées via des endpoints REST  
- Déployer le backend sur Render.com et le frontend (React) sur GitHub Pages  

---

## 🛠️ Stack technique

- **Node.js** – Environnement d’exécution JavaScript  
- **Express** – Framework minimaliste pour créer le serveur  
- **Sequelize** – ORM pour faciliter les requêtes SQL  
- **SQLite** – Base de données légère, locale  
- **TypeScript** – Pour le typage et la robustesse  
- **Swagger** – Pour la documentation interactive de l’API  
- **Dotenv** – Pour sécuriser les variables d’environnement  

---

## 📮 Endpoints disponibles

| Méthode | URL             | Description                       |
|--------:|------------------|-----------------------------------|
| `GET`   | `/jokes`         | Récupère toutes les blagues       |
| `GET`   | `/jokes/:id`     | Récupère une blague par son ID    |
| `GET`   | `/jokes/random`  | Récupère une blague aléatoire     |
| `POST`  | `/jokes`         | Ajoute une nouvelle blague        |

---

## 🌐 API en ligne

🔗 https://carambar-joke-server.onrender.com

---

## 📘 Documentation Swagger

🧾 https://carambar-joke-server.onrender.com/api-docs/

---

## 🖥️ Lancer le projet en local

1. **Cloner le projet :**  
   `git clone https://github.com/arnaud-dvg/carambar-joke-server.git`  
   `cd carambar-joke-server`  

2. **Installer les dépendances :**  
   `npm install`

3. **Lancer le serveur :**  
   `npm run dev`

---

## 📁 Structure du projet

carambar-joke-server/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── database/
│   └── app.ts
├── swagger.json
└── ...

yaml
Copier
Modifier

---

## 👨‍💻 Auteur

Projet développé par **Arnaud DVG**  
🔗 https://github.com/arnaud-dvg
