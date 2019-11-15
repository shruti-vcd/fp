/// <reference types="Cypress" />

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://ragavendra2018-3.herokuapp.com/')
    })

    it('has link to Home Page', () => {
        cy.get('#home-link').should('contain.text','Home');
    })
    it('has link to Home Page', () => {
        cy.get('#about-link').should('contain.text', 'About');
    })
    it('has link to Home Page', () => {
        cy.get('[routerlink="/todos"]').should('contain.text', 'Todos');
    })
    it('has link to Home Page', () => {
        cy.get('[routerlink="/stopwatch"]').should('contain.text', 'Stopwatch');
    })
})
