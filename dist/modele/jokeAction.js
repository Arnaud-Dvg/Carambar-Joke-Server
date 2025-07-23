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
const jokeRepository_1 = __importDefault(require("./jokeRepository"));
const jokeAction = {
    // GET /api/v1/blagues
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jokes = yield jokeRepository_1.default.findAll();
            res.status(200).json(jokes);
        });
    },
    // GET /api/v1/blagues/:id
    readOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jokeId = Number(req.params.id);
            const joke = yield jokeRepository_1.default.findById(jokeId);
            if (!joke) {
                return res.status(404).json({ message: "Blague non trouvée" });
            }
            res.status(200).json(joke);
        });
    },
    readRandom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const joke = yield jokeRepository_1.default.findRandom();
            if (!joke) {
                return res.status(404).json({ message: "Aucune blague trouvée." });
            }
            res.status(200).json(joke);
        });
    },
    // POST /api/v1/blagues
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            if (!content || content.trim() === "") {
                return res.status(400).json({ message: "Le contenu est requis" });
            }
            const newJoke = yield jokeRepository_1.default.create(content);
            res.status(201).json(newJoke);
        });
    },
};
exports.default = jokeAction;
