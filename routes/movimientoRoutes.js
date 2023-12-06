import express from 'express';
const router = express.Router();

import { crearMovimiento, listarMovimientos, listarMovimiento, actualizarMovimiento, eliminarMovimiento } from "../controllers/movimientoController.js"

import checkAuth from "../middleware/checkAuth.js"

router.post('/crear-movimiento', checkAuth, crearMovimiento) //Crear un nuevo movimiento
router.get('/listar-movimientos', checkAuth, listarMovimientos) //Listar todos los movimientos
router.get('/listar-movimiento/:id', checkAuth, listarMovimiento) //Listar un movimiento por su id
router.put('/actualizar-movimiento/:id', checkAuth, actualizarMovimiento) //Actualizar un movimiento por su id
router.put('/eliminar-movimiento/:id', checkAuth, eliminarMovimiento) //Eliminar un movimiento por su id

export default router;