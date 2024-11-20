import express from "express";
import cors from "cors";
import conn from "./config/conn.js";

//Models

//Routes
import empresaRoutes from "./routes/empresaRoutes.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sync banco de dados
// conn
//   .sync()
//   .then()
//   .catch((error) => console.error(error));

//importar as rotas
app.use("/api/empresas", empresaRoutes);

app.use((request, response) => {
  response.status(404).json({ message: "Rota não encontrada" });
});

export default app;
