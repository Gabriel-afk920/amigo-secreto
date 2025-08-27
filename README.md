# 🎁 Amigo Secreto — Projeto Web

## 📌 Visão Geral
Este é um projeto simples em **HTML, CSS e JavaScript** que permite cadastrar participantes e realizar o sorteio de um **Amigo Secreto** diretamente no navegador.  
Não há necessidade de servidor ou dependências externas: basta abrir o arquivo `index.html`.

---

## 📂 Estrutura do Projeto

---

## 🚀 Como Executar
1. Baixe/clique no arquivo **`index.html`**.  
2. Abra em um navegador moderno (Chrome, Firefox, Edge, Safari).  
3. Digite os nomes dos participantes no campo de entrada e clique em **Adicionar**.  
4. Após cadastrar os nomes, clique em **Sortear amigo** para obter o resultado.  

---

## ⚙️ Funcionalidades

### 🔹 HTML
- Estrutura organizada com **`<header>`, `<main>` e `<section>`**.  
- Campo de entrada e botão **Adicionar** para cadastrar nomes.  
- Lista `#listaAmigos` exibe todos os participantes.  
- Área `#resultado` mostra o sorteio, com suporte a leitores de tela (`aria-live="polite"`).  
- Botão de **Sortear amigo** com ícone e destaque visual.  

### 🔹 JavaScript
- **Gerenciamento de participantes:**  
  - Função `adicionarAmigo()` valida e adiciona nomes em um array.  
  - `atualizarLista()` atualiza dinamicamente a lista no HTML.  
  - `limparCampo()` reseta o campo de entrada.  

- **Sorteio:**  
  - Função `sortearAmigo()` seleciona aleatoriamente um nome da lista.  
  - Impede sorteio sem participantes.  
  - Exibe o resultado em `#resultado`.  

- **Experiência do Usuário:**  
  - Pressionar **Enter** adiciona um novo participante rapidamente.  
  - `limparResultado()` remove resultados antigos ao inserir novos nomes.  
  - `reiniciarJogo()` zera lista e resultado.  
  - Se a biblioteca `responsiveVoice` estiver disponível, o sorteio é narrado por voz.  

---

## 🎨 Estilo (CSS)
- **Layout responsivo** com Flexbox.  
- **Cores e variáveis** centralizadas no `:root`.  
- **Tipografia**: Google Fonts (`Inter` para texto, `Merriweather` para títulos).  
- **Interatividade**: botões com `hover`, espaçamentos consistentes e sombras leves.  

---

## ♿ Acessibilidade
- Uso de `aria-live` para leitura automática do sorteio.  
- Listas com `role="list"`.  
- Compatibilidade com leitores de tela.  

