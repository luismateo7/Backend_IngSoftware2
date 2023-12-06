import mongoose from "mongoose";

const movimientoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        required: true,
        trim: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

const Movimiento = mongoose.model("Movimiento", movimientoSchema)
export default Movimiento;
