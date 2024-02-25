const auth = require('../fixtures/auth');
const selectors = require('../fixtures/selectors');

it('booking tickets', () => {
    cy.visit('/admin')
    cy.login(auth.validEmail, auth.validPass)
    cy.contains(auth.adminScreen).should("be.visible")

    cy.get(selectors.movie_title).eq(0).invoke("text").then((text) => {
        const movieTitle = text
        cy.visit("/");
        cy.get(selectors.days).eq(1).click();
        cy.contains(movieTitle).parents(selectors.movie).get(selectors.session).click();
        cy.fixture("seats").then((seats) => {
            seats.forEach((seat) => {
                cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
            });
        });
        // cy.contains(auth.ButtonBookingName).click();
        // cy.contains(auth.BookingResult).should("be.visible");
    });
})