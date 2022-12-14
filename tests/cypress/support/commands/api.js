const API_URL = Cypress.env('apiUrl')


// FAZER LOGIN NA API
Cypress.Commands.add('apiLogin', (user) => {

    const payload = {
        instagram: user.instagram,
        password: user.password
    }

    cy.request({
        url: API_URL + '/sessions',
        method: 'POST',
        body: payload
    }).then(response => {
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })
})

//DELETA ANTES DA MASSA DE TESTE SER EXECUTADA DENTRO DA SUITE DE TESTE DE CADASTRO COM SUCESSO
Cypress.Commands.add('apiResetUser', (instagram) => {
    cy.request({
        method: 'DELETE',
        url: API_URL + '/helpers-reset',
        qs: { instagram: instagram }
    }).then(response => {
        expect(response.status).to.eql(204)
    })
})

//POST E DELETE PARA CADASTRO DUPLICADO
Cypress.Commands.add('apiCreateUser', (payload) => {

    cy.apiResetUser(payload.instagram)

    cy.request({
        method: 'POST',
        url: API_URL + '/signup',
        body: payload
    }).then(response => {
        expect(response.status).to.eql(201)
    })
})

// CRIA UMA FOODTRUCK
Cypress.Commands.add('apiCreateFoodTruck', (payload) => {
    cy.request({
        url: API_URL + '/foodtrucks',
        method: 'POST',
        headers: {
            'Authorization': Cypress.env('token')
        },
        body: payload
    }).then(response => {
        expect(response.status).to.eql(201)
    })
})