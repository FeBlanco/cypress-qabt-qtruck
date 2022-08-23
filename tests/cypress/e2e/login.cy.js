import loginPage from '../support/pages/Login';
import mapPage from "../support/pages/Map";


describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Felipe',
      instagram: '@felpblanco',
      password: 'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
    // cy.login(user)
    //cy.loggedUser(user.name)
  })

  it('não deve logar com senha invalida', () => {
    const user = {
      instagram: '@felpblanco',
      password: 'abc123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

    // cy.login(user)
    //cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('não deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@felppppppp',
      password: 'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

   //cy.login(user)
   //cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: 'pwd123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatório', () => {
    const user = {
      instagram: '@felpblanco',
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos devem ser obrigatório', () => {
    //const user = {}
    loginPage.go()
    loginPage.submit()
    loginPage.modal.haveText('Por favor, informe suas credenciais!')

    //cy.login(user)
    //cy.modalHaveText('Por favor, informe suas credenciais!')
  })

})


