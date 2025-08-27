//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }
    if (typeof responsiveVoice !== 'undefined') {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
}

function atualizarLista() {
    // 1) Obter o elemento da lista
    var lista = document.getElementById('listaAmigos'); // ou: document.querySelector('#listaAmigos')
    if (!lista) return; // defesa: elemento inexistente

    // 2) Limpar a lista existente
    lista.innerHTML = '';

    // 3) Percorrer o array e 4) Adicionar <li> para cada amigo
    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limparResultado() {
    var ulResultado = document.getElementById('resultado');
    if (ulResultado) {
        ulResultado.innerHTML = '';
    }
}

function limparCampo() {
    var campo = document.getElementById('amigo');
    if (campo) {
        campo.value = '';
    }
}

function adicionarAmigo() {
    var input = document.getElementById('amigo');
    if (!input) return;

    var nome = (input.value || '').trim();
    if (nome === '') {
        alert('Por favor, insira um nome.');
        input.focus();
        return;
    }

    amigos.push(nome);
    atualizarLista();
    limparResultado();
    limparCampo();
    input.focus();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        var input = document.getElementById('amigo');
        if (input) input.focus();
        return;
    }

    var indice = Math.floor(Math.random() * amigos.length);
    var amigoSorteado = amigos[indice];

    var ulResultado = document.getElementById('resultado');
    if (ulResultado) {
        ulResultado.innerHTML = '';
        var li = document.createElement('li');
        li.textContent = 'O amigo secreto sorteado é: ' + amigoSorteado;
        ulResultado.appendChild(li);
    }
}

var inputNome = document.getElementById('amigo');
if (inputNome) {
    inputNome.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.ctrlKey) {
            e.preventDefault();
            adicionarAmigo();
        }
    });
}

function reiniciarJogo() {
    amigos = [];
    atualizarLista();
    limparResultado();
    limparCampo();
    exibirMensagemInicial();
}

// Inicialização
exibirMensagemInicial();
