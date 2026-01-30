import LoginActions from "../actions/LoginActions";

class TransferenciaPage {
    

    selecionarTipoTransacao() {
        cy.getByData('select-opcoes').should('exist').select('Depósito')
    }
    preencherValor(valor) {
        cy.getByData('form-input').should('exist').type(valor)
    }
    confirmarTransferencia() {
        cy.getByData('realiza-transacao').click()
    }
}

export default new TransferenciaPage()