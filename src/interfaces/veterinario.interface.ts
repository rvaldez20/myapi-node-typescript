export interface Veterinario {
  name: string;
  password: string;
  email: string;
  phone?: string;
  web?: string;
  token?: string;
  confirmed?: boolean;
}