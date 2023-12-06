import mongoose from "mongoose";
import bcrypt from "bcrypt"

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        default: function () {
            return this.email; // Establece el valor por defecto como el email del usuario
        }
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    movimiento: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movimiento"
    }],
    token: {
        type: String
    },
    presupuesto: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
)

usuarioSchema.pre('save', async function (next) {

    //Si el usuario edita su email, su nombre u otro campo, no va hashear nuevamente la contraseña que previamente fue hasheada en el momento de la creacion

    if (!this.isModified("password")) {
        next() //Express tiene la function next() para mandarte al siguiente middleware
    }

    //Entre más salt se le ponga más segura será, pero ocupará más recursos del servidor
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password) //Toma el password del form y el hasheado
};

const Usuario = mongoose.model("Usuario", usuarioSchema)
export default Usuario;
