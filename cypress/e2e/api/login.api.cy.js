describe('API - Login', () => {
    const usuario = require('../../fixtures/usuarios.json')

    it('Deve realizar login com credenciais válidas', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/users/login`,
            body: {
                email: usuario.valido.email,
                senha: usuario.valido.senha
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('access_token')
        })
    });
    it('Deve rejeitar login com credenciais inválidas', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/users/login`,
            body: {
                email: usuario.invalido.email,
                senha: usuario.invalido.senha
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.eq('E-mail ou senha incorretos')
        })
    })
    it.only('Deve acessar rota protegida com token válido', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('apiUrl')}/users/login`,
            body: {
                email: usuario.valido.email,
                senha: usuario.valido.senha
            }
        }).then((loginResponse) => {
            const token = loginResponse.body.access_token
            expect(token).to.exist

            cy.request({
                method: 'GET',
                url: '/home',
                body: { Authorization: `Bearer ${token}`}
            }).then((protectedResponse) => {
                expect(protectedResponse.status).to.eq(200)
            })
        })
    });
});