const auth = require('../fixtures/auth');

describe('login page', () => {
    beforeEach(() => {
      cy.visit('/admin')
    })

    it('succeful login with valid email and password', () => {
        cy.login(auth.validEmail, auth.validPass)
        cy.contains(auth.adminScreen).should("be.visible")
    })

    it('unsucceful login with invalid email', () => {
      cy.login(auth.invalidEmail, auth.validPass)
      cy.contains(auth.errorMessage).should("be.visible")
    })

    it('unsucceful login with invalid password', () => {
      cy.login(auth.validEmail, auth.invalidPass)
      cy.contains(auth.errorMessage).should("be.visible")
    })
})