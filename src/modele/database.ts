import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import path from "path";


dotenv.config();
console.log("Database");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../../jokes.sqlite"), // chemin absolu correct sur Render
  logging: false,
});




export default sequelize;
