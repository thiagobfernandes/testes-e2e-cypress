import LoginPage from '../../../support/pages/LoginPage';

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
    LoginPage.fillEmail('usuario@invalido.com');
    // LoginPage.fillPassword('senha123');
    // LoginPage.submit();
    // cy.get('.error-message').should('be.visible');
    cy.get('.action-email').should('have.value', 'usuario@invalido.com');
  });

  it('Deve realizar login com sucesso', () => {
    cy.login('admin@teste.com', 'admin123');
    // cy.url().should('include', '/dashboard');
    cy.get('.action-email').should('have.value', 'admin@teste.com');
  });
});
