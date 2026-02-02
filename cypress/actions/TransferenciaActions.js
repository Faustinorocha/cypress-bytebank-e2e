import TransferenciaPage from "../pages/TransferenciaPage";

class TransferenciaAction {
    // BUG CONHECIDO:
    // O sistema permite transferência com valor maior que o saldo disponível.
    // Este teste valida o comportamento atual do sistema.
    transferenciaValidaEAtualizaSaldo(dados) {
        let saldoInicial

        TransferenciaPage.obterSaldo().then((saldoTexto) => {
            saldoInicial = this.converterSaldo(saldoTexto)
        })


        TransferenciaPage.selecionarTipo(dados.tipo)
        TransferenciaPage.preencherValor(dados.valor)
        TransferenciaPage.confirmar()

        TransferenciaPage.obterSaldo().then((saldoTexto) => {
            const saldoFinal = this.converterSaldo(saldoTexto)
            expect(saldoFinal).to.eq(saldoInicial - dados.valor)
        })
    }


    depositoValida(dados) {
        let saldoInicial

        TransferenciaPage.obterSaldo().then((saldoTexto) => {
            saldoInicial = this.converterSaldo(saldoTexto)
        })

        TransferenciaPage.selecionarTipo(dados.tipo)
        TransferenciaPage.preencherValor(dados.valor)
        TransferenciaPage.confirmar()

        TransferenciaPage.obterSaldo().then((saldoTexto) => {
            const saldoFinal = this.converterSaldo(saldoTexto)
            expect(saldoFinal).to.eq(saldoInicial + dados.valor)
        })
    }
    converterSaldo(texto) {
        return Number(texto.replace('R$ ', '').trim())
    }
}

export default new TransferenciaAction()