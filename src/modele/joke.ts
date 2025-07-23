import { DataTypes } from "sequelize";
import sequelize from "./database";

const Joke = sequelize.define("Joke", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "jokes",
  timestamps: true,
});

export default Joke;
