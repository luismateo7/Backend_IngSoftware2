import Usuario from "../models/Usuario.js"
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";

// import { emailRegistro, emailOlvidePassword } from "../helpers/email.js";

const registrar = async (req, res) => {

    const { nombre, apellido, username, password,  email, phone} = req.body;

    //Evitar registros duplicados
    const existeUsuario = await Usuario.findOne({ email })

    if (existeUsuario) {
        const error = new Error("Usuario ya registrado")
        return res.status(400).json({ msg: error.message })
    }

    try {
        const usuario = new Usuario({
            nombre,
            apellido,
            password,
            email,
            phone
        });

        if(username) usuario.username = username;

        usuario.token = generarId()
        await usuario.save();

        //Enviar el email de confirmación
        // emailRegistro({
        //     email: usuario.email,
        //     nombre: usuario.nombre,
        //     token: usuario.token
        // })

        // const lengthContraseña = password.length;

        res.json({
            msg: "Usuario Creado Correctamente",
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
            // lengthContraseña: lengthContraseña,
            phone: usuario.phone,
            apellido: usuario.apellido,
        });

    } catch (error) {
        console.log(error);
    }
}

const autenticar = async (req, res) => {

    const { email, password } = req.body;

    //Comprobar si el usuario existe
    const usuario = await Usuario.findOne({ email }) || await Usuario.findOne({username: email})
    if (!usuario) {
        const error = new Error('El usuario no exsite');
        return res.status(404).json({ msg: error.message })
    }

    //Comprobar su password
    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
            apellido: usuario.apellido,
            phone: usuario.phone,
            presupuesto : usuario.presupuesto
        })
    }
    else {
        const error = new Error('Contraseña incorecta')
        return res.status(403).json({ msg: error.message })
    }
}

const actualizarPresupuesto = async (req, res) => {
    const { presupuesto } = req.body;
    const { _id } = req.usuario;

    try {
        const usuario = await Usuario.findById(_id);
        usuario.presupuesto = presupuesto;
        await usuario.save();

        res.json({
            msg: "Presupuesto actualizado correctamente",
        })
    } catch (error) {
        console.log(error);
    }
}

const resetearMovimientos = async (req, res) => {
    const { _id } = req.usuario;

    try {
        const usuario = await Usuario.findById(_id);
        usuario.movimiento = [];
        usuario.presupuesto = 0;

        await usuario.save();

        res.json({
            msg: "Movimientos reseteados correctamente",
        })
    } catch (error) {
        console.log(error);
    }
}

export { registrar, autenticar, actualizarPresupuesto, resetearMovimientos }