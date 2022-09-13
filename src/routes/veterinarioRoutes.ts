import { Router, Request, Response } from 'express';


const routerVet = Router();

// route para el registro
routerVet.post('/registro', (req: Request, res: Response) => {
   res.send('Desde POST /registo')
})

// route para el perfil
routerVet.get('/perfil', (req: Request, res: Response) => {
   res.send('Desde GET /perfil')
})

export { routerVet };