import { DataTypes } from "sequelize";
import conn from "../config/conn";

const empresaModel = conn.define(
  "empresa",
  {//Colunas da tabela empresa
    
  },
  {//Opções para tabela empresa
    timestamps: false,
    tableName: "empresa",
  }
);

export default empresaModel;
