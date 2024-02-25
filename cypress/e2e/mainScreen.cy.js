import selectors from "../fixtures/selectors";

describe('check cinema main screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display main screen', () => {
    cy.contains('Идёмвкино').should("be.visible")
    cy.get(selectors.days).should("have.length", 7)
  })
})