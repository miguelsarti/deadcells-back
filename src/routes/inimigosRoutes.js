import express from "express";
import InimigosController from "../controllers/inimigosController.js";

const inimigosRouter = express.Router();

// Rotas de Inimigos
// GET /inimigos - Listar todos os inimigos
inimigosRouter.get("/", InimigosController.getAllInimigos);

// GET /inimigos/:id - Obter um Inimigo pelo ID
inimigosRouter.get("/:id", InimigosController.getInimigoById);

// POST /inimigos - Criar um novo Inimigo
inimigosRouter.post("/", InimigosController.createInimigos);

// PUT /inimigos/:id - Atualizar um Inimigo
inimigosRouter.put("/:id", InimigosController.updateInimigo);

// DELETE /inimigos/:id - Remover um Inimigo
inimigosRouter.delete("/:id", InimigosController.deleteInimigo);

export default inimigosRouter;
