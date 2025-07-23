import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/modele/jokes.sqlite", // Chemin relatif depuis la racine du projet
  logging: false,
});

export default sequelize;
