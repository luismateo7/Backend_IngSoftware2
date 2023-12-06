import Movimiento from "../models/Movimiento.js";
import Usuario from "../models/Usuario.js";

const crearMovimiento = async (req, res) => {

    const { nombre, cantidad, fecha, categoria, owner } = req.body;

    console.log(req.usuario);

    // Crear el movimiento
    const movimiento = new Movimiento({
        nombre,
        cantidad,
        fecha,
        categoria,
        owner
    });

    try {
        const usuario = await Usuario.findById(req.usuario._id);
        usuario.movimiento.push(movimiento);
        await movimiento.save();
        await usuario.save();

        res.json({ msg: "Movimiento creado correctamente" })
    } catch (error) {
        console.log(error);
    }
}

const listarMovimientos = async (req, res) => {
    try {
        // Listar los movimientos del usuario que el estado sea true
        const usuario = await Usuario.findById(req.usuario._id).populate("movimiento");

        // Filtrar movimientos por estado true
        const movimientosActivos = usuario.movimiento.filter(movimiento => movimiento.estado === true);

        res.json(movimientosActivos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

const listarMovimiento = async (req, res) => {
    try {
        const movimiento = await Movimiento.findById(req.params.id)
        res.json(movimiento)
    } catch (error) {
        console.log(error);
    }
}

const actualizarMovimiento = async (req, res) => {
    try {
        const movimiento = await Movimiento.findById(req.params.id)

        const { nombre, cantidad, fecha, categoria } = req.body;

        movimiento.nombre = nombre;
        movimiento.cantidad = cantidad;
        movimiento.fecha = fecha;
        movimiento.categoria = categoria;

        await movimiento.save();

        res.json({ msg: "Movimiento actualizado correctamente" })
    } catch (error) {
        console.log(error);
    }
}

const eliminarMovimiento = async (req, res) => {
    try {
        const movimiento = await Movimiento.findById(req.params.id)

        movimiento.estado = !movimiento.estado;

        await movimiento.save();

        res.json({ msg: "Movimiento eliminado correctamente" })
    } catch (error) {
        console.log(error);
    }
}

export { crearMovimiento, listarMovimientos, listarMovimiento, actualizarMovimiento, eliminarMovimiento }