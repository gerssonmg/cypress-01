/// <reference types="Cypress" />=
const URL = 'https://staging.loggi.com/loggin';

describe('Google search', () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it('visit website', () => {
    cy.get('a[href="/loggin"]').should('have.length', 1).click();
    cy.get('form').within(($form) => {
      cy.get('input[data-e2e="input-email"]').type('teste.e2e@loggi.com');
      cy.get('input[data-e2e="input-password"]').type('loggi');
    });
    cy.get('button[data-e2e="button-login"]').click();
  });

  //da erro de CORS, provavelmente tem algo implementado no back-end para
  //filtrar isso.
  it('visit website', () => {
    cy.get('a[href="/loggin"]').should('have.length', 1).click();
    cy.get('form').within(($form) => {
      cy.get('input[data-e2e="input-email"]').type('teste.e2e@loggi.com');
      cy.get('input[data-e2e="input-password"]').type('loggi');
      cy.root().submit();
    });

  });

})