import { IDadosCadastro } from "../../../factories/login/LoginFactory";

export const dadosUsuario: IDadosCadastro = {
    email: Cypress.env('usuario'),
    nome: "Usuário Teste",
    senha: Cypress.env('senha')
}