const express = require("express");
const router = express.Router();
import jokeAction from "../modele/jokeAction";

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   content:
 *                     type: string
 */
// Récupère toutes les blagues
router.get("/", jokeAction.readAll);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 */
// Récupère une blague aléatoire
router.get("/random", jokeAction.readRandom);
/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague à récupérer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 *       404:
 *         description: Blague non trouvée
 */
// Récupère une blague via son ID
router.get("/:id", jokeAction.readOne);


/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 description: Contenu de la blague
 *     responses:
 *       201:
 *         description: Blague ajoutée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 *       400:
 *         description: Requête invalide
 */
// Ajout d'une nouvelle blague
router.post("/", jokeAction.create);

export default router
