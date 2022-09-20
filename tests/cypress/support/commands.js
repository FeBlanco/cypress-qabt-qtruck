
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
  import './commands/api'
  import './commands/ui'