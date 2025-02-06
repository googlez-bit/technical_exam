const { DataTypes } = require("sequelize");
const db = require("./db").default;

const User = db.define("user", {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstname: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  middlename: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  profile_picture: { type: DataTypes.STRING, allowNull: true },
});

module.exports = User;