import LoginPage from '../../../support/pages/LoginPage';

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    LoginPage.visitar();
  });

  it('Deve preencher o email corretamente via Page Object', () => {
    LoginPage.preencherEmail('usuario@teste.com');
    cy.get('.action-email').should('have.value', 'usuario@teste.com');
  });

  it('Deve realizar login com sucesso via comando customizado', () => {
    // O comando cy.login agora usa o LoginPage internamente
    cy.login('admin@teste.com', 'admin123');
    cy.get('.action-email').should('have.value', 'admin@teste.com');
  });
});
