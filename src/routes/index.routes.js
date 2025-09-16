import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";

import authMiddleware from "../middleware/authMiddleware.js";
import mutacoesRouter from "./mutacoesRoutes.js";
import armasRouter from "./armasRoutes.js";
import npcsRouter from "./npcsRoutes.js";
import inimigosRouter from "./inimigosRoutes.js";
import personagensRouter from "./personagensRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/mutacoes", mutacoesRouter);
router.use("/armas", armasRouter);
router.use("/npcs", npcsRouter);
router.use("/inimigos", inimigosRouter);
router.use("/personagens", personagensRouter);

// Rotas protegidas
router.use(authMiddleware);



export default router;
