# Bug - Transferência aceita velor meior que o saldo

## Resunmo
O sistema permite a realização de uma transferência com valor superior ao saldo disponível em conta, resultado em saldo negativo.

## Ambiente
- Aplicação: Bytebank
- Tipo: web
- Ambiente: local
- Navegador: chrome
- Data: 31/01/2026

## Pré-condições
- Usuário autenticado no sistema
- Usuário com saldo positivo disponível

## Passos para reprodução
1. Realizar login com usuário válido
2. Seleciona o tipo de transação "Transferência"
3. Informar um valor maior que o saldo disponível
4. Confirmar a transferência

## Resultado esperado
O sistema deve bloquear a transferência e exibir uma mensagem informando saldo insuficiente.

## Resultado atual
O sistema oernute a transferência com valor superior ao saldo disponível e atualiza o saldo
para um valor negativo.

## Impacto
Alto - Permite comportamento inválido em fluxo financeiro crítico, podendo gear inconsistências de saldo e prejuízo financeiro.

## Evidências
- Saldo antes da transferência: R$ 1000,00
- Valor transferido: R$ 1200,00
- Saldo após a transferência: R$ -100,00

## Evidência 01 - Saldo negativo após transdferência
bug-01-ev-01.png ./evidencia/
bug-01-ev-02.png ./evidencia/
bug-01-ev-03.png ./evidencia/

## Severidade
Alta

## Prioridade
Alta