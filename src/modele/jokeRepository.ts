// Ce fichier gère les requêtes vers la base de données pour les blagues (modèle Joke).
// Il fournit des fonctions pour lire, créer, et tirer une blague aléatoire.
import Joke from "./joke";

const jokeRepository = {
  // Récupérer toutes les blagues
  async findAll() {
    return await Joke.findAll();
  },

  // Récupérer une blague par ID
  async findById(id: number) {
    return await Joke.findByPk(id);
  },

  // Récupérer une blague aléatoire
  async findRandom() {
  try {
    const count = await Joke.count();
    if (count === 0) {
      throw new Error("Aucune blague trouvée.");
    }
    const randomIndex = Math.floor(Math.random() * count);
    const jokes = await Joke.findAll({ limit: 1, offset: randomIndex });
    return jokes[0];
  } catch (error) {
    console.error("Erreur dans jokeRepository.findRandom:", error);
    throw error;
  }
},

  // Créer une nouvelle blague
  async create(content: string) {
    return await Joke.create({ content });
  },
};

export default jokeRepository;