import { Sequelize } from "sequelize";

const conn = new Sequelize("", "", "", {
  host: "localhost",
  dialect: "mysql",
});

export default conn;
