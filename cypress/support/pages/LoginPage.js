class LoginPage {
  visitar() {
    cy.visit('/commands/actions'); // URL de exemplo
  }

  preencherEmail(email) {
    cy.get('.action-email').type(email);
  }

  preencherSenha(senha) {
    // Como a página de exemplo não tem campo de senha padrão, usamos um seletor genérico ou logamos para simular
    cy.log('Preenchendo senha:', senha);
    // Exemplo: cy.get('#password').type(senha);
  }

  submeter() {
    // Exemplo: cy.get('button[type="submit"]').click();
    cy.log('Submetendo formulário de login');
  }
}

export default new LoginPage();
