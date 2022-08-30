
// LOGIN
// Cypress.Commands.add('login', (user) => {
//     cy.visit('/')
  
//     if(user.instagram) cy.get('input[name=instagram]').type(user.instagram)
//     if(user.password) cy.get('input[name=password]').type(user.password)
  
//     cy.contains('button', 'Entrar').click()
//   })
  
  //MODAL DE ERRO LOGIN
  // Cypress.Commands.add('modalHaveText', (text) => {
  //   cy.get('.swal2-html-container')
  //     .should('be.visible')
  //     .should('have.text', text)
  // })

  //ASSERT DE VALIDAÇÃO
  // Cypress.Commands.add('loggedUser', (name) => {
  //   cy.get('.logged-user')
  //     .should('be.visible')
  //     .should('have.text', `Olá, ${name}`)
  // })

  import loginPage from './pages/Login';
  import mapPage from "./pages/Map";

  //DELETA ANTES DA MASSA DE TESTE SER EXECUTADA DENTRO DA SUITE DE TESTE DE CADASTRO COM SUCESSO
  Cypress.Commands.add('apiResetUser', (instagram) => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3333/helpers-reset',
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
      url: 'http://localhost:3333/signup',
      body: payload
    }).then(response => {
      expect(response.status).to.eql(201)
    })
  })

    //LOGIN NA UI
    Cypress.Commands.add('uiLogin', (user)=> {
      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
  
      mapPage.loggedUser(user.name)
  })
  
  //GEOLOCALIZAÇÃO
  Cypress.Commands.add('setGeolocation', (lat, long)=> {
      localStorage.setItem('qtruck:latitude', lat)
      localStorage.setItem('qtruck:longitude', long)
  })