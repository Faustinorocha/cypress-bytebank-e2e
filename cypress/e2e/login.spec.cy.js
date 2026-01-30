import LoginActions from '../actions/LoginActions'
describe('Funcionalidade Login', () => {
  const usuario = {
    email: 'neto@qacom',
    senha: '123456'
  }
  it('passes', () => {
    LoginActions.loginValido(usuario)
  })

  it.only('login invalido', () => {
    LoginActions.loginInvalido(usuario)
  });
})