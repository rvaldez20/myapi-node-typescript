import "dotenv/config";
import express from 'express';
import cors from 'cors';

import { routerVet } from "./routes/veterinarioRoutes";
import { routerPac } from "./routes/pacientesRouter";



const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

// routes
app.use('/api/veterinarios', routerVet)
app.use('/api/pacientes', routerPac)

app.listen(PORT, () => console.log(`Server run on PORT ${PORT}`))

