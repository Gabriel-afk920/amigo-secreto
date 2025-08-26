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
exibirMensagemInicial();

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    if (!lista) return;

    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limparResultado() {
    let ulResultado = document.getElementById('resultado');
    if (ulResultado) {
        ulResultado.innerHTML = '';
    }
}

function limparCampo() {
    let campo = document.getElementById('amigo');
    if (campo) {
        campo.value = '';
    }
}

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    if (!input) return;

    let nome = (input.value || '').trim();
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
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
        let input = document.getElementById('amigo');
        if (input) input.focus();
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let ulResultado = document.getElementById('resultado');
    if (ulResultado) {
        ulResultado.innerHTML = '';
        let li = document.createElement('li');
        li.textContent = 'O amigo secreto sorteado é: ' + amigoSorteado;
        ulResultado.appendChild(li);
    }

}

let inputNome = document.getElementById('amigo');
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
