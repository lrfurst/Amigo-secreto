//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        atualizarLista();
        document.getElementById('amigo').value = ''; 
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há nomes na lista. Adicione amigos para sortear.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.innerHTML = ''; 
        let li = document.createElement('li');
        li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
        resultadoElement.appendChild(li);
    }
}