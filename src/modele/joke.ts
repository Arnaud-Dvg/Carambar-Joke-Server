import { DataTypes } from "sequelize";
import sequelize from "./database";

const Joke = sequelize.define("jokes", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "jokes",
  timestamps: false,
});

export default Joke;
