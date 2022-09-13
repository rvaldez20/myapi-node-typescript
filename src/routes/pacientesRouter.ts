import { Router, Request, Response } from 'express';


const routerPac = Router();

// route test pacientes
routerPac.get('/listado', (req: Request, res: Response) => {
   res.send('..... Desde GET /pacientes ......')
})

export { routerPac };