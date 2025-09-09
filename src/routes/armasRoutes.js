import express from "express";
import ArmasController from "../controllers/armasController.js";

const armasRouter = express.Router();

// Rotas de Armas
// GET /armas - Listar todas as Armas
armasRouter.get("/", ArmasController.getAllArmas);

// GET /armas/:id - Obter uma Arma pelo ID
armasRouter.get("/:id", ArmasController.getArmaById);

// POST /armas - Criar uma nova Arma
armasRouter.post("/", ArmasController.createArma);

// PUT /armas/:id - Atualizar uma Arma
armasRouter.put("/:id", ArmasController.updateArma);

// DELETE /armas/:id - Remover uma Arma
armasRouter.delete("/:id", ArmasController.deleteArma);

export default armasRouter;
