import LoginActions from '../actions/LoginActions'
describe('Login - Bytebank', () => {

  let usuarios
  
  beforeEach(() => {
    cy.fixture('usuarios').then((dados) => {
      usuarios = dados
    })
  });

  it('Deve permitir login com credenciais válidos', () => {
      LoginActions.loginValido(usuarios.valido)
  })

  it('Deve impedir login com credenciais inválidas', function () {
    LoginActions.loginInvalido(usuarios.invalido)
  });

})