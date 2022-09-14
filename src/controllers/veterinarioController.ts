import { Request, Response } from 'express';
import { getVeterinario, saveRegistroVeterinario } from '../services/veterinarioServices';
import { handleHttp } from '../utils/error.handle';


const registrarVeterinario = async({ body }: Request, res: Response) => {
  try {
    const { name, email, password} = body;
    // verificamos que email | password | name contengan datos
    if(name && email && password) {    
      // Verifificamos si existe el email  
      const existEmail = await getVeterinario(body.email);  
  
      if (existEmail) {
        // Si ya existe el emial mandamos mensaje de error
        res.json({msg: 'Email already existed'});
        console.log(body.email + ': Existe')
      } else {
        // Si no existe el email guaramos el registro
        const newRegister = await saveRegistroVeterinario( body );
        res.json(newRegister);
      }
    } else {
      res.json({msg: 'Name, email and password is required'});
    }    
  } catch (e) {    
    // handleHttp(res, 'ERROR_POST_REGISTER');
    res.send({e})
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