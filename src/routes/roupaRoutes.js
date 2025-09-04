import express from "express";
import RoupaController from "../controllers/roupasController.js";

const roupasRouter = express.Router();

// Rotas de Roupas
// GET /personagens - Listar todas as Roupas
roupasRouter.get("/", RoupaController.getAllRoupas);

// GET /roupas/:id - Obter um Roupa pelo ID
roupasRouter.get("/:id", RoupaController.getRoupaById);

// POST /roupas - Criar um novo Roupa
roupasRouter.post("/", RoupaController.createRoupa);

// PUT /roupas/:id - Atualizar um Roupa
roupasRouter.put("/:id", RoupaController.updateRoupa);

// DELETE /roupas/:id - Remover um Roupa
roupasRouter.delete("/:id", RoupaController.deleteRoupa);

export default roupasRouter;
