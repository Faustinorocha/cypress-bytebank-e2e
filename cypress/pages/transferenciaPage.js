import LoginActions from "../actions/LoginActions";

class TransferenciaPage {
    
    obterSaldo() {
        return cy.getByData('saldo').invoke('text')
    }

    selecionarTipo(tipo) {
        cy.getByData('select-opcoes').should('exist').select(tipo)
    }

    preencherValor(valor) {
        cy.getByData('form-input').should('exist').type(valor)
    }

    confirmar() {
        cy.getByData('realiza-transacao').click()
    }
}

export default new TransferenciaPage()