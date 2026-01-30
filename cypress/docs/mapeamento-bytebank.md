# Mapeamento de Fluxos – Aplicação Bytebank

## Objetivo
Este documento descreve os principais fluxos da aplicação Bytebank que serão utilizados
como base para a automação de testes E2E com Cypress, seguindo boas práticas de QA Automation.

O foco está em fluxos críticos de negócio, priorizando cenários que, se falharem,
impactam diretamente o funcionamento do sistema.

---

## Fluxos Mapeados

### Fluxo 1 – Login (CRÍTICO)
Responsável por permitir o acesso do usuário ao sistema.

Cenários:
- Acessar a tela de login
- Login com credenciais válidas
- Login com credenciais inválidas
- Comportamento pós-login (redirecionamento para Home)

---

### Fluxo 2 – Home
Tela exibida após login bem-sucedido.

Elementos e comportamentos esperados:
- Exibição de mensagem de boas-vindas
- Exibição do nome do usuário logado
- Exibição do saldo da conta

---

### Fluxo 3 – Transferência (CRÍTICO)
Fluxo principal de negócio da aplicação.

Cenários:
- Acessar tela de transferência
- Realizar transferência com valor negativo
- Bloquear transferência com sem saldo
- Exibir mensagens de sucesso ou erro conforme o cenário

---

## Mapeamento de Elementos por Página

### Login Page
- Botão de acesso à tela de login
- Input de e-mail
- Input de senha
- Botão de envio
- Mensagem de erro para login inválido

---

### Home Page
- Mensagem de boas-vindas
- Nome do usuário logado
- Saldo da conta
- Acesso à funcionalidade de transferência

---

### Transferência Page
- Input de tipo de transação
- Input de valor da transação
- Botão de confirmação
- Mensagem de sucesso ou erro

---

## Escopo de Automação (MVP)

Os seguintes cenários fazem parte do escopo inicial de automação:

- Login com credenciais válidas
- Login com credenciais inválidas
- Transferência com dados válidos
- Transferência com dados inválidos

---

## Cenários Fora do Escopo Inicial

Os cenários abaixo foram mapeados, mas não fazem parte do MVP de automação:

- Cadastro de conta
- Validações visuais de layout
- Validação detalhada de extrato

Esses cenários poderão ser incluídos em uma evolução futura do projeto.