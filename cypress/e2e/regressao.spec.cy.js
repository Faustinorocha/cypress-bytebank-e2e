import LoginActions from '../actions/LoginActions'
import TransferenciaActions from '../actions/TransferenciaActions';


describe('Regressão - Fluxo principal Bytebank', () => {
    const usuario = require('../fixtures/usuarios.json')
    const transacao = require('../fixtures/transacao.json')

    beforeEach(() => {
        LoginActions.loginValido(usuario.valido)
    });

    it('Deve executar o fluxo principal com sucesso', () => {
        TransferenciaActions.transferenciaValidaEAtualizaSaldo(transacao.transferencia)

    });
});