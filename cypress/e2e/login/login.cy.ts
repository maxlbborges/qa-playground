import { LoginFactory } from "../../../factories/login/LoginFactory";
import { dadosUsuario } from "./login.data";


describe("Testes da Estrutura de Login", () =>{
    const telaDeLogin = new LoginFactory()
    it ("Teste de Cadastro de Usuário", () => {
        telaDeLogin.visitar({ urlParaVisita: "/"})
        telaDeLogin.cadastrarUsuario({dadosDoCadastro: dadosUsuario})
    })
    it ("Teste de Login com sucesso", () => {
        // Necessário resolucionar de alguma forma a questão de login do bugbank
        telaDeLogin.visitar({ urlParaVisita: "/"})
        telaDeLogin.cadastrarUsuario({dadosDoCadastro: dadosUsuario})
        telaDeLogin.realizarLogin({dadosDoUsuario: dadosUsuario})
    })

})