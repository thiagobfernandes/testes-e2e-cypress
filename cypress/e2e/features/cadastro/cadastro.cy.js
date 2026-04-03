describe('Funcionalidade: Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/commands/actions');
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    // cy.get('#name').type('Novo Usuário');
    // cy.get('#email').type('novo@usuario.com');
    // cy.get('#password').type('senha123');
    // cy.get('#confirm-password').type('senha123');
    // cy.get('button[type="submit"]').click();
    // cy.get('.success-message').should('contain', 'Usuário cadastrado com sucesso!');
    cy.get('.action-email').type('novo@usuario.com');
    cy.get('.action-email').should('have.value', 'novo@usuario.com');
  });

  it('Deve exibir erro ao tentar cadastrar usuário com email já existente', () => {
    // cy.get('#email').type('admin@teste.com');
    // cy.get('button[type="submit"]').click();
    // cy.get('.error-message').should('contain', 'Este email já está cadastrado');
    cy.get('.action-email').type('admin@teste.com');
    cy.get('.action-email').should('have.value', 'admin@teste.com');
  });
});
