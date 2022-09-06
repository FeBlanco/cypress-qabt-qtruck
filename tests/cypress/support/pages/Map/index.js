

class MapPage {

    loggedUser(name){
        const firstName = name.split(' ')[0]

        cy.get('.logged-user')
        .should('be.visible')
        .should('have.text', `Olá, ${firstName}`)
    }

    createLink() {
        cy.get('a[href="/foodtrucks/create"]')
            .should('be.visible')
            .click()
    }

    goToFoodtruck(foodtruckName) {
        cy.get(`img[alt="${foodtruckName}"]`)
        .should('be.visible')
        .click({force: true})

    cy.get('.leaflet-popup-content a').click()
    }


}

export default new MapPage()