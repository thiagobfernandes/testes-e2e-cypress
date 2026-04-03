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

## 🛡️ Camada de Testabilidade (Seletores Estáveis)

Neste projeto, adotamos o uso de atributos `data-testid` para garantir a robustez dos testes. Essa prática separa as preocupações de **estilo (CSS)** e **comportamento (JS)** das preocupações de **automação (E2E)**.

### Por que usar `data-testid`?

1. **Evita Testes Frágeis**: Mudanças em classes CSS (`.btn`, `.primary`) ou IDs de elementos para fins de estilo não quebram os testes, pois o `data-testid` permanece inalterado.
2. **Desacoplamento do Layout**: Se a estrutura do HTML mudar (ex: mover um botão de uma `div` para um `footer`), o Cypress continuará encontrando o elemento pelo seu atributo de teste dedicado.
3. **Contrato entre Dev e QA**: Define-se antecipadamente quais elementos são essenciais para a automação, criando um "contrato de testabilidade" que evita a remoção acidental de seletores cruciais.
4. **Legibilidade**: O código de teste torna-se mais semântico, deixando claro qual componente está sendo testado (ex: `cy.get('[data-testid="login-submit-button"]')`).

Para ver o mapeamento completo dos seletores planejados, consulte o arquivo [docs/TESTABILITY_MAP.md](./docs/TESTABILITY_MAP.md).
