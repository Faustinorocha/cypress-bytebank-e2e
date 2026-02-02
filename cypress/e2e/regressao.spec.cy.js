import LoginActions from '../actions/LoginActions'
import TransferenciaActions from '../actions/TransferenciaActions';


describe('Regressão - Fluxo principal Bytebank', () => {
    let usuario;
    let transacao;
    beforeEach(() => {
        cy.fixture('usuarios').then((dados) => {
            usuario = dados
            LoginActions.loginValido(usuario.valido)
        })
        cy.fixture('transacao').then((dados) => {
            transacao = dados
        })
    });
    it('Deve permitir login e realizar transferencia com sucesso', () => {

        TransferenciaActions.transferenciaValida(transacao.transferencia)
        



    });
});