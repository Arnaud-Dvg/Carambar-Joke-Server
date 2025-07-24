import { DataTypes } from "sequelize";
import sequelize from "./database";

const Joke = sequelize.define("jokes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "jokes",
  timestamps: false,
});

export default Joke;
