Cypress.Commands.add('login', (email, password) => {
  cy.visit('/commands/actions');
  cy.get('.action-email').type(email);
  // Simulação de login
  cy.log('Logando com:', email);
});
