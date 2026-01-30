import LoginActions from '../actions/LoginActions'
describe('Login - Bytebank', () => {



  it('Deve permitir login com credenciais válidos', () => {
    const usuario = {
      email: 'neto@qa.com',
      senha: '123456'
    }
    LoginActions.loginValido(usuario)
  })

  it('login invalido', () => {
    const usuario = {
      email: 'neto@qacom',
      senha: '1234562'
    }
    LoginActions.loginInvalido(usuario)
  });
})