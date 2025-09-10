export interface IParamsClicar {
    force?: boolean,
    focus?: boolean,
    doubleClick?: boolean
}

export interface IParamsDigitar {
    force?: boolean
    log?: boolean
}

export class AcoesGeraisDaTela {
    
    public visitar ({urlParaVisita} : {urlParaVisita: string}) {
        cy.log(`Acessando a seguinte URL: ${urlParaVisita}`)
        cy.visit(urlParaVisita)
    }

    public clicarNoElemento ({ identificadorDoElemento, parametrosDoClique = {force: false, focus: false, doubleClick: false}} : {identificadorDoElemento: string, parametrosDoClique?: Partial<IParamsClicar>}) {
       const { force = false, focus = false, doubleClick = false } = parametrosDoClique || {}
       const forceOption: Partial<Cypress.ClickOptions> = {
           force: true
       }
        cy.log(`Clicando no elemento com identificador: ${identificadorDoElemento}.`)
        const elementoASerClicado = cy.get(identificadorDoElemento).should('exist');

        if (parametrosDoClique.focus) {
            cy.log(" -- Parâmetro focus do click() está ativado! -- ")
            parametrosDoClique.doubleClick
                ? elementoASerClicado.focus().dblclick(parametrosDoClique.force?forceOption:{})
                : elementoASerClicado.focus().click(parametrosDoClique.force?forceOption:{})
        } else {
            cy.log(" -- Parâmetro focus do click() está desativado! -- ")
            parametrosDoClique.doubleClick
                ? elementoASerClicado.dblclick(parametrosDoClique.force?forceOption:{})
                : elementoASerClicado.click(parametrosDoClique.force?forceOption:{})
        }

    }

    public digitarNoElemento ({identificadorDoElemento, informacao, parametrosDoDigitar = {force: false, log: true}} : {identificadorDoElemento: string, informacao: string, parametrosDoDigitar?: IParamsDigitar}) {
        cy.log(`Irei digitar a informação: ${informacao} no campo: ${identificadorDoElemento}`)
        const elementoIdentificado = cy.get(identificadorDoElemento).should('exist').and('not.be.disabled')
        if (parametrosDoDigitar.log) {
            cy.log(`Irei digitar a informação: ${informacao} no campo: ${identificadorDoElemento}`)
            elementoIdentificado.type(informacao, {force: parametrosDoDigitar.force?true:false})
        }else {
            cy.log(`Inserindo informação parametrizada no campo: ${identificadorDoElemento} -- LOG: FALSE`)
            elementoIdentificado.type(informacao, {force: parametrosDoDigitar.force?true:false, log: false})
        }
    }
}