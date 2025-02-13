import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "technical_exam",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

export default sequelize;