"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joke_1 = __importDefault(require("./joke"));
const jokeRepository = {
    // Récupérer toutes les blagues
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield joke_1.default.findAll();
        });
    },
    // Récupérer une blague par ID
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield joke_1.default.findByPk(id);
        });
    },
    // Récupérer une blague aléatoire
    findRandom() {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield joke_1.default.count();
            if (count === 0)
                return null;
            const randomIndex = Math.floor(Math.random() * count);
            const jokes = yield joke_1.default.findAll({ limit: 1, offset: randomIndex });
            return jokes[0];
        });
    },
    // Créer une nouvelle blague
    create(content) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield joke_1.default.create({ content });
        });
    },
};
exports.default = jokeRepository;
