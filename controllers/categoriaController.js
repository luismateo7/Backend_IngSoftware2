
import Categoria from "../models/Categoria.js";
import axios from "axios"

const crearCategoria = async (req, res) => {

    const { nombre, imagen } = req.body;

    // Crear la categoria
    const categoria = new Categoria({
        nombre,
        imagen
    });

    try {
        await categoria.save();
        res.json({ msg: "Categoria creada correctamente" })
    } catch (error) {
        console.log(error);
    }
}

const listarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find()
        res.json(categorias)
    } catch (error) {
        console.log(error);
    }
}

const listarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)
        res.json(categoria)
    } catch (error) {
        console.log(error);
    }
}

const actualizarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)

        const { nombre, imagen } = req.body;

        categoria.nombre = nombre;
        categoria.imagen = imagen;

        await categoria.save();

        res.json({ msg: "Categoria actualizada correctamente" })
    } catch (error) {
        console.log(error);
    }
}

const eliminarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id)

        categoria.estado = !categoria.estado;

        await categoria.save();

        res.json({ msg: "Categoria eliminada correctamente" })
    } catch (error) {
        console.log(error);
    }
}

export { crearCategoria, listarCategorias, listarCategoria, actualizarCategoria, eliminarCategoria }