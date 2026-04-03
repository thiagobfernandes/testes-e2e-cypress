# Projeto de Testes E2E com Cypress

Este projeto contém a automação de testes end-to-end para uma aplicação web (SPA), utilizando o framework **Cypress**.

## 🚀 Estrutura do Projeto

A estrutura foi organizada seguindo boas práticas de testabilidade e reutilização:

- `cypress/e2e/features/`: Contém os arquivos de teste agrupados por funcionalidade (Login, Dashboard, Cadastro).
- `cypress/support/pages/`: Implementação do padrão **Page Object Model (POM)** para melhor manutenção.
- `cypress/support/commands.js`: Comandos customizados do Cypress para ações recorrentes (ex: login).

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## 🏁 Como Executar

1. Clone o repositório:
   ```bash
   git clone <link-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os testes em modo headless:
   ```bash
   npm run test:e2e
   ```

4. Abra a interface do Cypress para execução interativa:
   ```bash
   npm run test:e2e:open
   ```

## 📝 Observações

Os testes estão configurados para rodar contra uma URL de exemplo (`https://example.cypress.io`) como placeholder. Para rodar contra sua aplicação real, altere o `baseUrl` no arquivo `cypress.config.js`.
