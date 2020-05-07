/// <reference types="Cypress" />=

describe('Google search', () => {
  beforeEach(() => {
    cy.visit('https://google.com');
  });

  it('visit website', () => {
    cy.get('input[name="q"]').should('have.length', 1).type('loggi{enter}');
  });

  it('seatch suggestion google', () => {
    cy.get('input[name="q"]').should('have.length', 1).type('loggi');
    cy.get('ul li:last').click();
  });
})