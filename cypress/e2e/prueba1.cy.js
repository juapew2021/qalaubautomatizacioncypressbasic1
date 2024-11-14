/// <reference types="Cypress"/>
describe('registro en buggy', () => {
  it('haremos el registro de un usuario', () => {
    cy.visit('https://buggy.justtestit.org')
    cy.get('.btn-success-outline').click()
    cy.get('.btn-success-outline').click();
    cy.get('.col-md-6 > form > :nth-child(1)').click()
    cy.get('#username').type ('Nathaniso1');
    cy.get('.col-md-6 > form > :nth-child(2)').click()
    cy.get('#firstName').type ('nathalitus')
    cy.get('.col-md-6 > form > :nth-child(3)').click()
    cy.get('#lastName').type ('Ninoso');
    cy.get('form > :nth-child(4)').click()
    cy.get('#password').type ('Carlos123@')
    cy.get('form > :nth-child(5)').click()
    cy.get('#confirmPassword').type ('Carlos123@')
    cy.get('.btn-default').click()


  })
  it('que no se registre con el mismo usuario', () => {
    cy.visit('https://buggy.justtestit.org')
    cy.get('.btn-success-outline').click()
    cy.get('.btn-success-outline').click();
    cy.get('.col-md-6 > form > :nth-child(1)').click()
    cy.get('#username').type ('Nathaniso1');
    cy.get('.col-md-6 > form > :nth-child(2)').click()
    cy.get('#firstName').type ('nathalitus')
    cy.get('.col-md-6 > form > :nth-child(3)').click()
    cy.get('#lastName').type ('Ninoso');
    cy.get('form > :nth-child(4)').click()
    cy.get('#password').type ('Carlos123@')
    cy.get('form > :nth-child(5)').click()
    cy.get('#confirmPassword').type ('Carlos123@')
    cy.get('.btn-default').click()
})
})

