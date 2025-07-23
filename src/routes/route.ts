const express = require("express");
const router = express.Router();
import jokeAction from "../modele/jokeAction";

// Récupère toutes les blagues
router.get("/", jokeAction.readAll);

// Récupère une blague via son ID
router.get("/:id", jokeAction.readOne);

// Récupère une blague aléatoire
router.get("/random", jokeAction.readRandom);

// Ajout d'une nouvelle blague
router.post("/", jokeAction.create);

export default router
