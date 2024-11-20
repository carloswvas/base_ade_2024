import express from "express";
import cors from "cors";

//Models

//Routes
import empresaRoutes from "./routes/empresaRoutes.js"

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//importar as rotas
app.use("/api/empresas", empresaRoutes)

app.use((request, response) => {
  response.status(404).json({ message: "Rota não encontrada" });
});

export default app;
