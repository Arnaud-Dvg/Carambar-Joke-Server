// src/init.ts
import { readFileSync } from "fs";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("src/modele/jokes.sqlite");

const schema = readFileSync("src/modele/schema.sql", "utf8");

db.exec(schema, (err) => {
  if (err) {
    console.error("❌ Erreur SQL :", err.message);
  } else {
    console.log("✅ Base créée et blagues insérées !");
  }
  db.close();
});
