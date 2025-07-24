/**
 * Fichier de configuration de la connexion à la base de données SQLite via Sequelize.
 * Ce fichier initialise Sequelize avec le bon chemin vers le fichier `.sqlite`,
 * et désactive les logs SQL pour une console plus propre.
 */
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";

dotenv.config(); // Charge les variables d’environnement depuis le fichier .env

// Création d'une instance Sequelize configurée pour utiliser SQLite comme base de données
const sequelize = new Sequelize({
  dialect: "sqlite", 
  storage: path.join(__dirname, "../../jokes.sqlite"),
  logging: false, // Désactive l'affichage des requêtes SQL dans la console
});

export default sequelize;
