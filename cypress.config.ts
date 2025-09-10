import { defineConfig } from "cypress"
import * as dotenv from 'dotenv'

dotenv.config();

export default defineConfig({
  e2e:{
    baseUrl: process.env.BASE_URL,
    env:{
      usuario: process.env.USUARIO_TESTE,
      senha: process.env.SENHA_TESTE
    }
  }
})
