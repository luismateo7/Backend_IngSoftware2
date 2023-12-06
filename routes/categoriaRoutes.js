import express from 'express';
const router = express.Router();

import { crearCategoria, listarCategorias, listarCategoria, actualizarCategoria, eliminarCategoria } from "../controllers/categoriaController.js"

import checkAuth from "../middleware/checkAuth.js"

router.post('/crear-categoria', checkAuth, crearCategoria) //Crear una nueva categoria
router.get('/listar-categorias', checkAuth, listarCategorias) //Listar todas las categorias
router.get('/listar-categoria/:id', checkAuth, listarCategoria) //Listar una categoria por su id
router.put('/actualizar-categoria/:id', checkAuth, actualizarCategoria) //Actualizar una categoria por su id
router.put('/eliminar-categoria/:id', checkAuth, eliminarCategoria) //Eliminar una categoria por su id

export default router;
