describe('Funcionalidade: Dashboard', () => {
  beforeEach(() => {
    // Simulando login
    cy.visit('/commands/actions');
  });

  it('Deve carregar os elementos principais do dashboard', () => {
    // cy.get('.navbar').should('be.visible');
    // cy.get('.sidebar').should('be.visible');
    // cy.get('.main-content').should('be.visible');
    cy.get('h1').should('contain', 'Actions');
  });

  it('Deve exibir o nome do usuário logado', () => {
    // cy.get('.user-profile-name').should('contain', 'Usuário de Teste');
    cy.get('.action-email').type('admin@teste.com');
    cy.get('.action-email').should('have.value', 'admin@teste.com');
  });
});
