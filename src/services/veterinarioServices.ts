// importamos el modelo Vetrinario 
import { Veterinario } from '../interfaces/veterinario.interface'
import VeterinarioModel from '../models/VeterinarioModel'

// Services para guardar un registro en la DB
const saveRegistroVeterinario = async (veterinario: Veterinario) => {
  const responseSaveRegistro = await VeterinarioModel.create(veterinario)
  return responseSaveRegistro;
}

// Services GET oly one veterinario
const getVeterinario = async (emailCheck: string) => {
  const responseGetVeterinario = await VeterinarioModel.findOne({email: emailCheck})
  return responseGetVeterinario;
}


export {
  saveRegistroVeterinario,
  getVeterinario,
}