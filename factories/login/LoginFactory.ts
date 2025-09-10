import { AcoesGeraisDaTela } from "../AcoesGeraisDaTela"

export interface IDadosCadastro {
    email: string,
    nome: string,
    senha: string
}

export class LoginFactory extends AcoesGeraisDaTela {

    public cadastrarUsuario ({dadosDoCadastro}: {dadosDoCadastro: IDadosCadastro}) {
        cy.log(` -- Realizando Cadastro do Usuario com as seguintes informações: ${JSON.stringify(dadosDoCadastro)} --`)
        this.clicarNoElemento({ identificadorDoElemento: 'div.login__buttons button[type=button]' })
        this.digitarNoElemento({ identificadorDoElemento: 'div.card__register input[name=email]', 
            informacao: dadosDoCadastro.email, 
            parametrosDoDigitar: {force: true}
        })
        this.digitarNoElemento({ identificadorDoElemento: 'div.card__register input[name=name]', 
            informacao: dadosDoCadastro.nome,
            parametrosDoDigitar: {force: true}
         })
        this.digitarNoElemento({ 
            identificadorDoElemento: 'div.card__register  input[name=password]', 
            informacao: dadosDoCadastro.senha, 
            parametrosDoDigitar: {force: true, log: false} 
        })
        this.digitarNoElemento({ identificadorDoElemento: 'div.card__register  input[name=passwordConfirmation]', 
            informacao: dadosDoCadastro.senha, 
            parametrosDoDigitar: {force: true, log: false} 
        })
        this.clicarNoElemento({ identificadorDoElemento: 'div.card__register button[type=submit]', parametrosDoClique: {force: true} })
        cy.get('p[id=modalText]').should('exist').and('be.visible').and('contain.text', 'foi criada com sucesso')
        this.clicarNoElemento({ identificadorDoElemento: 'a[id=btnCloseModal]', parametrosDoClique: {force: true} })
        
    }

    public realizarLogin ({dadosDoUsuario}:{dadosDoUsuario: IDadosCadastro}) {
        this.preencherCamposDeLogin({ email: dadosDoUsuario.email, senha: dadosDoUsuario.senha })
        this.clicarNoElemento({ identificadorDoElemento: 'div.login__buttons button[type="submit"]' })
        cy.get('a[id=btnExit]').should('exist').and('be.visible')
        cy.log('Validado botão de Sair da conta logada.')
        cy.get('p[id=textName]').should('exist').and('be.visible').and('have.text', `Olá ${dadosDoUsuario.nome},`,)
        cy.log('Validado texto de boas vindas.')
    }

    private preencherCamposDeLogin ({email, senha} : {email: string, senha: string}) {
        cy.log("Preenchendo os campos de login e senha.")
        this.digitarNoElemento({ identificadorDoElemento: "div.card__login input[type=email]", informacao: email})
        this.digitarNoElemento({ identificadorDoElemento: "div.card__login input[type=password]", 
            informacao: senha, 
            parametrosDoDigitar: {force: true, log: false}
        })
    }
}

 