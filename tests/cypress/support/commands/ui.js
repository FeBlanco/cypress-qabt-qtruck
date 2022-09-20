import loginPage from '../pages/Login';
import mapPage from "../pages/Map";

    //LOGIN NA UI
    Cypress.Commands.add('uiLogin', (user)=> {
      loginPage.go('-23.584548837854058', '-46.674446913517876')
      loginPage.form(user)
      loginPage.submit()
  
      mapPage.loggedUser(user.name)
  })
  
  //GEOLOCALIZAÇÃO
  Cypress.Commands.add('setGeolocation', (lat, long)=> {
      localStorage.setItem('qtruck:latitude', lat)
      localStorage.setItem('qtruck:longitude', long)
  })