import "dotenv/config";
import express from 'express';
import cors from 'cors';

import db from './config/db'
import { routerVet } from "./routes/veterinarioRoutes";
import { routerPac } from "./routes/pacientesRouter";

const PORT = process.env.PORT || 3001;
const app = express();

// db conection
db().then(() => console.log('Conection MongoDB ready!!'));

app.use(cors());
app.use(express.json());

// routes
app.use('/api/veterinarios', routerVet)
app.use('/api/pacientes', routerPac)

// listener server
app.listen(PORT, () => console.log(`Server run on PORT ${PORT}`))

