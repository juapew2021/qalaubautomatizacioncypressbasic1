/// <reference types="Cypress"/>
describe('registro en buggy', () => {
  it('haremos el registro de un usuario', () => {
    cy.visit('https://buggy.justtestit.org')
    cy.get('.btn-success-outline').click()

  })
})