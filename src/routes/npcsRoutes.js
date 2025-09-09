import express from "express";
import NpcsController from "../controllers/npcsController.js";

const npcsRouter = express.Router();

// Rotas de NPCs
// GET /npcs - Listar todos os NPCs
npcsRouter.get("/", NpcsController.getAllNpcs);

// GET /npcs/:id - Obter um NPC pelo ID
npcsRouter.get("/:id", NpcsController.getNpcById);

// POST /npcs - Criar um novo NPC
npcsRouter.post("/", NpcsController.createNpc);

// PUT /npcs/:id - Atualizar um NPC
npcsRouter.put("/:id", NpcsController.updateNpc);

// DELETE /npcs/:id - Remover um NPC
npcsRouter.delete("/:id", NpcsController.deleteNpc);

export default npcsRouter;
