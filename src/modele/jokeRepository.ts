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
  const count = await Joke.count();
  if (count === 0) return null;
  const randomIndex = Math.floor(Math.random() * count);
  const jokes = await Joke.findAll({ limit: 1, offset: randomIndex });
  return jokes[0];
},

  // Créer une nouvelle blague
  async create(content: string) {
    return await Joke.create({ content });
  },
};

export default jokeRepository;
