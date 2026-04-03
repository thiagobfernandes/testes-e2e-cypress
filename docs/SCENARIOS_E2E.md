# Cenários de Teste E2E (Planejamento)

Estes cenários foram escritos seguindo os requisitos de negócio e utilizando os seletores estáveis definidos na camada de testabilidade.

---

### Cenário 1: Verificar cabeçalho e título principal
**Objetivo:** Garantir que a identidade visual e o título da aplicação estejam corretos.

1. **Dado** que eu acesso a página inicial (`/index.html`)
2. **Então** deve existir um elemento com `data-testid="app-header"`
3. **E** deve existir um elemento com `data-testid="app-title"`
4. **E** o texto contido em `app-title` deve ser exatamente **“Marketplace Teste”**

---

### Cenário 2: Verificar menu de navegação e seus itens
**Objetivo:** Validar se todos os links de navegação essenciais estão presentes no menu.

1. **Dado** que eu estou na página inicial
2. **Então** o container `data-testid="home-menu"` deve estar visível
3. **E** dentro dele devem existir links com os seguintes textos:
    - "Home"
    - "Produtos"
    - "Categorias"
    - "Marcas"
    - "Variações"
    - "Carrinho"
4. **E** o link de produtos deve possuir o atributo `data-testid="home-menu-link-produtos"`

---

### Cenário 3: Verificar card de boas-vindas e CTA
**Objetivo:** Validar a presença do componente de boas-vindas e seu botão de ação (Call to Action).

1. **Dado** que eu acesso a página inicial
2. **Então** o card `data-testid="home-welcome-card"` deve estar visível na tela
3. **E** deve conter uma mensagem de saudação ao usuário
4. **E** deve existir um link de ação com `data-testid="home-welcome-cta-produtos"` contendo o texto **“Ver produtos”**

---

### Cenário 4: Validar fluxos de navegação para a página de produtos
**Objetivo:** Garantir que ambos os caminhos de acesso à listagem de produtos funcionam corretamente.

**Fluxo A (Via Menu):**
1. **Dado** que eu estou na página inicial
2. **Quando** eu clico no elemento `data-testid="home-menu-link-produtos"`
3. **Então** a URL deve mudar para incluir `/produtos`
4. **E** o título da nova página deve indicar que estou na listagem de produtos

**Fluxo B (Via Card de Boas-Vindas):**
1. **Dado** que eu estou na página inicial
2. **Quando** eu clico no elemento `data-testid="home-welcome-cta-produtos"`
3. **Então** a URL deve mudar para incluir `/produtos`
4. **E** a página deve carregar a lista de produtos disponíveis
