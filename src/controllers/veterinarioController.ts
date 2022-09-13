import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';


const registrarVeterinario = ({ body }: Request, res: Response) => {
  try {
    console.log(body)
  } catch (e) {    
    handleHttp(res, 'ERROR_POST_REGISTER');
  }
}


const perfilVeterinario = (req: Request, res: Response) => {
  try {
    res.json('GET_PERFIL')
  } catch (e) {
    handleHttp(res, 'ERROR_GET_PERFIL');
  }
}

export {
  registrarVeterinario,
  perfilVeterinario,
}