/// <reference types="Cypress"/>
describe('registro en buggy', () => {
  it.skip('Haremos el registro de un usuario', () => {
    cy.visit('https://buggy.justtestit.org')
    cy.get('.btn-success-outline').click()
    cy.get('.btn-success-outline').click();
    cy.get('.col-md-6 > form > :nth-child(1)').click()
    cy.get('#username').type ('Lucas2346');
    cy.get('.col-md-6 > form > :nth-child(2)').click()
    cy.get('#firstName').type ('Lucas')
    cy.get('.col-md-6 > form > :nth-child(3)').click()
    cy.get('#lastName').type ('Caste');
    cy.get('form > :nth-child(4)').click()
    cy.get('#password').type ('Carlos1234@')
    cy.get('form > :nth-child(5)').click()
    cy.get('#confirmPassword').type ('Carlos1234@')
    cy.get('.btn-default').click()
    cy.get('.result').should('contain.text', 'Registration is successful')

  })
  it.skip('Que no se registre con el mismo usuario', () => {
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

it('Entrar a la pagina web con el nuevo usuario', () => {
  cy.get('input').type('login')
  cy.get('.form-inline > .form-group > [name="password"]').type('Carlos123@')
  cy.get('.btn-success').click()
})
})

