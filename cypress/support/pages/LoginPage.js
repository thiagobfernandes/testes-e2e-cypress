class LoginPage {
  visit() {
    cy.visit('/commands/actions'); // URL de exemplo do Cypress
  }

  fillEmail(email) {
    cy.get('.action-email').type(email);
  }

  fillPassword(password) {
    // Exemplo genérico, pois a página de exemplo não tem todos os campos
    // cy.get('#password').type(password);
  }

  submit() {
    // cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
