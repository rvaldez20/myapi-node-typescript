import { Router, Request, Response } from 'express';


const router = Router();

// route para el registro
router.post('/registro', (req: Request, res: Response) => {
   res.send('Desde POST /registo')
})

// route para el perfil
router.get('/perfil', (req: Request, res: Response) => {
   res.send('Desde GET /perfil')
})

export { router };