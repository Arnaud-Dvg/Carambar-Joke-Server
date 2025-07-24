// Ce fichier définit le modèle Joke pour Sequelize, qui représente la table "jokes" dans la base SQLite.
// Il permet de manipuler les blagues (lecture, création, etc.) via des méthodes Sequelize.
import { DataTypes } from "sequelize";
import sequelize from "./database";

const Joke = sequelize.define("jokes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING, // Contenu de la blague (chaîne de caractères)
    allowNull: false,
  },
}, {
  tableName: "jokes",
  timestamps: false, // Désactive createdAt et updatedAt
});

export default Joke;
