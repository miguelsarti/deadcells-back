import express from "express";
import PersonagensController from "../controllers/personagensController.js";

const personagensRouter = express.Router();

// Rotas de Personagens
// GET /personagens - Listar todos os Personagens
personagensRouter.get("/", PersonagensController.getAllPersonagens);

// GET /personagens/:id - Obter um Personagem pelo ID
personagensRouter.get("/:id", PersonagensController.getPersonagemById);

// POST /personagens - Criar um novo Personagem
personagensRouter.post("/", PersonagensController.createPersonagem);

// PUT /personagens/:id - Atualizar um Personagem
personagensRouter.put("/:id", PersonagensController.updatePersonagem);

// DELETE /personagens/:id - Remover um Personagem
personagensRouter.delete("/:id", PersonagensController.deletePersonagem);

export default personagensRouter;
