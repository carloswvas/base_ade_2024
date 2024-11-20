import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const empresaModel = conn.define("empresa", {});

export default empresaModel;
