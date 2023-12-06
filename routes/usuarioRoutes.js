import express from 'express';
const router = express.Router();

import { registrar, autenticar, actualizarPresupuesto, resetearMovimientos } from "../controllers/usuarioController.js"

import checkAuth from "../middleware/checkAuth.js"

// Autenticación, Registro y Confirmación de Usuarios
router.post('/registro', registrar) //Crea un nuevo usuario - Registro
router.post('/login', autenticar) //Autenticación - Login
router.put('/actualizar-presupuesto', checkAuth, actualizarPresupuesto) //Actualizar presupuesto
router.put('/resetear-movimientos', checkAuth, resetearMovimientos) //Resetear movimientos

export default router;
