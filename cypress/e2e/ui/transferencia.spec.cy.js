import LoginActions from "../../actions/LoginActions";
import TransferenciaActions from "../../actions/TransferenciaActions";

describe('Transferência - Bytebank', () => {

    let usuarios;
    let transacao;

    beforeEach(() => {
        cy.fixture('usuarios').then((dados) => {
            usuarios = dados
            LoginActions.loginValido(usuarios.valido)
        });
        
        cy.fixture('transacao').then((dados) => {
            transacao = dados
        });
      
    });

    it('Deve realizar uma transferencia válida', () => {

        TransferenciaActions.transferenciaValidaEAtualizaSaldo(transacao.transferencia)
    });
    it('Deve realizar depósito válido', () => {
        
        TransferenciaActions.depositoValida(transacao.deposito)
    });
});