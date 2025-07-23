"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/init.ts
const fs_1 = require("fs");
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database("src/modele/jokes.sqlite");
const schema = (0, fs_1.readFileSync)("src/modele/schema.sql", "utf8");
db.exec(schema, (err) => {
    if (err) {
        console.error("❌ Erreur SQL :", err.message);
    }
    else {
        console.log("✅ Base créée et blagues insérées !");
    }
    db.close();
});
