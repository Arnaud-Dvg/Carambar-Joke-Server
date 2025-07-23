import dotenv from "dotenv";
import express from "express";
import route from "./routes/route";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerConfig";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/v1/blagues", route);

// Serveur
app.listen(PORT, () => {
  console.info(`🚀 Serveur lancé sur http://localhost:${PORT}`);
  console.info(`📚 Swagger dispo sur http://localhost:${PORT}/api-docs`);
});