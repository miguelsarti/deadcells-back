import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";

import authMiddleware from "../middleware/authMiddleware.js";
import roupasRouter from "./roupaRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/roupas", roupasRouter);
// Rotas protegidas
router.use(authMiddleware);



export default router;
