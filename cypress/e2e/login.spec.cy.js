import LoginActions from '../actions/LoginActions'

describe('Login - Bytebank', () => {

  let usuarios
  
  beforeEach(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarios = dados
    })
  });

  it('Deve permitir login com credenciais válidos', () => {

    cy.intercept('POST', '/users/login').as('loginRequest')

    LoginActions.loginValido(usuarios.valido)

    cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)

    })
  })

  it('Deve impedir login com credenciais inválidas', function () {
    LoginActions.loginInvalido(usuarios.invalido)
  });

})