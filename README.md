# 🎁 Amigo Secreto — Projeto Web

## Visão Geral
Aplicação web em **JavaScript Vanilla** para cadastrar participantes e realizar o sorteio de um **Amigo Secreto** no próprio navegador. O estado é mantido em memória por um array (`amigos`); não há backend nem dependências obrigatórias.

## Como Executar
1. Mantenha `index.html`, `style.css` e `app.js` na **mesma pasta**.  
2. Abra `index.html` em um navegador moderno (Chrome, Edge, Firefox, Safari).  
3. Digite um nome no campo e clique **Adicionar** (ou pressione **Enter**).  
4. Clique **Sortear amigo** para exibir o resultado.  
5. Use **Reiniciar** para limpar lista, resultado e restaurar o título.

## Estrutura
├── index.html # Estrutura da página (input, listas, botões)
├── style.css # Estilos (cores, layout, tipografia, botões e listas)
└── app.js # Lógica: cadastro, atualização da lista, sorteio e reinício

## Elementos/IDs necessários (HTML)
- Campo de entrada: `#amigo`  
- Lista de participantes: `#listaAmigos`  
- Lista de resultado (com aria-live): `#resultado`  
- Botões que chamam: `adicionarAmigo()`, `sortearAmigo()`, `reiniciarJogo()`  

## Funcionalidades
- **Cadastro com validação** (`adicionarAmigo`): bloqueia nomes vazios com alerta **"Por favor, insira um nome."**, insere no array com `.push()`, limpa e mantém o foco no campo.  
- **Atualização de lista** (`atualizarLista`): seleciona `#listaAmigos`, limpa com `innerHTML = ''` e cria um `<li>` para cada nome do array.  
- **Sorteio aleatório** (`sortearAmigo`): impede execução com array vazio, gera índice por `Math.random()` + `Math.floor()` e exibe o sorteado em `#resultado`.  
- **Reinício** (`reiniciarJogo`): esvazia o array, limpa interface e reexibe “Amigo Secreto”.  
- **Atalho de teclado**: **Enter** no campo adiciona o nome.  
- **Voz (opcional)**: se `responsiveVoice` estiver disponível, os textos são narrados.

## Estilo (CSS)
- Paleta e variáveis: `--color-primary`, `--color-secondary`, `--color-button`, `--color-button-hover` etc.  
- Layout centralizado, header com título e imagem; seção de entrada com bordas e cantos arredondados.  
- Campos e botões com bordas arredondadas e estados de hover; destaque visual para o botão **Sortear**.  
- Listas sem marcadores; **resultado** em fonte maior e cor de destaque.

## Testes rápidos
- **Adicionar vazio** → alerta **"Por favor, insira um nome."**  
- **Adicionar nomes** → aparecem em `#listaAmigos`; campo limpa e mantém foco.  
- **Sortear sem nomes** → alerta **"Adicione pelo menos um nome antes de sortear."**  
- **Sortear com nomes** → `#resultado` exibe “O amigo secreto sorteado é: …”.  
- **Reiniciar** → limpa lista e resultado; restaura o título.
