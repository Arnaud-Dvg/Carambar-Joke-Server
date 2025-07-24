import jokeRepository from "./jokeRepository";
import { Request, Response } from "express";

const jokeAction = {
  // GET /api/v1/blagues
  async readAll(req: Request, res: Response) {
        console.log("Je suis là readAll");
    const jokes = await jokeRepository.findAll();
    res.status(200).json(jokes);
  },

  // GET /api/v1/blagues/:id
  async readOne(req: Request, res: Response) {
        console.log("Je suis là readOne");

    const jokeId = Number(req.params.id);
    const joke = await jokeRepository.findById(jokeId);
    if (!joke) {
      return res.status(404).json({ message: "Blague non trouvée" });
    }
    res.status(200).json(joke);
  },

  async readRandom(req: Request, res: Response) {
        console.log("Je suis là readRandom");

  const joke = await jokeRepository.findRandom();
  if (!joke) {
    return res.status(404).json({ message: "Aucune blague trouvée." });
  }
  res.status(200).json(joke);
},

  // POST /api/v1/blagues
  async create(req: Request, res: Response) {
        console.log("Je suis là create");

    const { content } = req.body;
    if (!content || content.trim() === "") {
      return res.status(400).json({ message: "Le contenu est requis" });
    }

    const newJoke = await jokeRepository.create(content);
    res.status(201).json(newJoke);
  },
};

export default jokeAction;