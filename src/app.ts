import dotenv from "dotenv";
import express from "express";
import route from "./routes/route";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerConfig";
import sequelize from "./modele/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/blagues", route);

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Connexion BDD + lancement
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à SQLite réussie.");
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
      console.log(`📚 Swagger : http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error("❌ Erreur de connexion à la BDD :", error);
  }
})();
