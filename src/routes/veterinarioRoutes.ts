import { Router, Request, Response } from 'express';
import { perfilVeterinario, registrarVeterinario } from '../controllers/veterinarioController';


const routerVet = Router();

// route para el registro
routerVet.post('/registro', registrarVeterinario)

// route para el perfil
routerVet.get('/perfil', perfilVeterinario)

export { routerVet };