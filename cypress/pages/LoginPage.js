class LoginPage {

    acessarTelaLogin() {
        cy.visit('/')
        cy.getByData('botao-login').click()
    }

    preencherEmail(email) {
        cy.getByData('email-input').type(email)
    }

    preencherSenha(senha) {
        cy.getByData('senha-input').type(senha)
    }
    submeterLogin() {
        cy.getByData('botao-enviar').click()
    }
}

export default new LoginPage()