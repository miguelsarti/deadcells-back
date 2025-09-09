import express from "express";
import MutacoesController from "../controllers/mutacoesController.js";

const mutacoesRouter = express.Router();

// Rotas de Mutações
// GET /mutacoes- Listar todas as Mutações
mutacoesRouter.get("/", MutacoesController.getAllMutacoes);

// GET /mutacoes/:id - Obter uma Mutação pelo ID
mutacoesRouter.get("/:id", MutacoesController.getMutacaoById);

// POST /mutacoes - Criar uma nova Mutação
mutacoesRouter.post("/", MutacoesController.createMutacao);

// PUT /mutacoes/:id - Atualizar uma Mutação
mutacoesRouter.put("/:id", MutacoesController.updateMutacao);

// DELETE /mutacoes/:id - Remover uma Mutação
mutacoesRouter.delete("/:id", MutacoesController.deleteMutacao);

export default mutacoesRouter;
