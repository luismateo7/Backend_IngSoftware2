import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

import usuarioRoutes from "./routes/usuarioRoutes.js"
import categoriaRoutes from "./routes/categoriaRoutes.js"
import movimientoRoutes from "./routes/movimientoRoutes.js"

const app = express();
app.use(express.json())

dotenv.config();
conectarDB();

// Manejar SIGTERM correctamente
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});

// Configurar CORS
const whiteList = [process.env.FRONTED_URL]; //Fronted permitidos

const corsOption = {
    origin: function (origin, callback) { //El origin detecta que fronted esta realizando la peticion
        if (whiteList.indexOf(origin) !== -1 || !origin) { //Si el origin que hace la peticion esta en whiteList entonces puede hacer la consulta a la API
            callback(null, true); //Damos acceso
        } else {
            //No esta permitido
            callback(new Error("Error de Cors"))
        }
    }
}

app.use(cors(corsOption))

// Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/categorias', categoriaRoutes)
app.use('/api/movimientos', movimientoRoutes)

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log('Desde Index')
})
