# Mapa de Seletores Estáveis (Camada de Testabilidade)

Para garantir que os testes E2E sejam robustos e independentes de mudanças visuais (CSS) ou estruturais (HTML), adotamos o uso do atributo `data-testid`. Abaixo está o mapeamento planejado para a página **Home**:

| Elemento | data-testid | Descrição |
| :--- | :--- | :--- |
| Header Principal | `app-header` | Container principal do cabeçalho da aplicação. |
| Título da Aplicação | `app-title` | O título principal exibido no header. |
| Menu de Navegação | `home-menu` | Container que agrupa os links de navegação. |
| Link de Produtos | `home-menu-link-produtos` | Link específico para a página de produtos no menu. |
| Card de Boas-Vindas | `home-welcome-card` | Card principal de saudação ao usuário. |
| CTA de Produtos | `home-welcome-cta-produtos` | Botão/Link "Ver produtos" dentro do card de boas-vindas. |
| Campo de Email | `login-email-input` | Input de email na tela de login. |
| Campo de Senha | `login-password-input` | Input de senha na tela de login. |
| Botão de Entrar | `login-submit-button` | Botão para submeter o formulário de login. |

## 🚀 Benefícios desta Abordagem

O uso de seletores dedicados à automação (`data-testid`) resolve o problema de **testes frágeis** de várias formas:

1. **Desacoplamento do Design**: O time de UX/UI pode alterar classes CSS (`.btn-primary` para `.btn-success`) ou IDs sem quebrar os testes.
2. **Semântica Clara**: O seletor indica explicitamente que aquele elemento é um ponto de interação para testes, evitando remoções acidentais por desenvolvedores.
3. **Estabilidade Estrutural**: Mudanças na hierarquia do HTML (ex: envolver um link em uma nova `div`) não afetam a seleção, pois o atributo permanece no elemento alvo.
4. **Facilidade de Manutenção**: Se um elemento mudar de função, basta atualizar o `data-testid` em um único lugar no Page Object.
5. **Velocidade de Desenvolvimento**: Automação e Front-end podem trabalhar em paralelo, definindo o contrato de seletores antes mesmo da implementação visual.
