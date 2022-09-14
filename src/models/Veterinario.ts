import { Schema, Types, model, Model } from 'mongoose';
import { Veterinario } from '../interfaces/veterinario.interface';

const veterinarioSchema = new Schema<Veterinario>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      default: null,
      trim:true,
    },
    web: {
      type: String,
      default: null,
    },
    token: {
      type: String
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timesStamps: true,
    versionKey: false,
  }
);

const Veterinario = model('veterinario', veterinarioSchema);
export default Veterinario;