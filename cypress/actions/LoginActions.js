import LoginPage from "../pages/LoginPage"

class LoginActions {
    loginValido(dados) {
        LoginPage.acessarTelaLogin()
        LoginPage.preencherEmail(dados.email)
        LoginPage.preencherSenha(dados.senha)
        LoginPage.submeterLogin()

        cy.url().should('contain', '/home')
        cy.getByData('titulo-boas-vindas').should('be.visible').and('contain', 'Bem vindo de volta')
        cy.getByData('saldo').should('be.visible')
    }
    loginInvalido(dados) {
        LoginPage.acessarTelaLogin()
        LoginPage.preencherEmail(dados.email)
        LoginPage.preencherSenha(dados.senha)
        LoginPage.submeterLogin()

        cy.getByData('mensagem-erro').should('be.visible').and('contain.text', 'O email digitado é inválido' )

    }
}


export default new LoginActions()