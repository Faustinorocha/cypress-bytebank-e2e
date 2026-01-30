class LoginPage {

    acessarTelaLogin() {
        cy.visit('/')
        cy.getByData('botao-login').click()
    }

    preencherEmail(email) {
        cy.getByData('email-input').should('exist').type(email)
    }

    preencherSenha(senha) {
        cy.getByData('senha-input').should('exist').type(senha)
    }
    submeterLogin() {
        cy.getByData('botao-enviar').should('exist').click()
    }
}

export default new LoginPage()