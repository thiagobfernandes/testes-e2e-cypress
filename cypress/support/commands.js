import LoginPage from './pages/LoginPage';

Cypress.Commands.add('login', (email, senha) => {
  LoginPage.visitar();
  LoginPage.preencherEmail(email);
  LoginPage.preencherSenha(senha);
  LoginPage.submeter();
});
