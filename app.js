//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener('DOMContentLoaded', function() {
    const amigoInput = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultadoLista = document.getElementById('resultado');
    let amigos = [];
  
    // Função para adicionar um amigo à lista
    window.adicionarAmigo = function() {
    const nomeAmigo = amigoInput.value.trim();
    if (nomeAmigo !== '') {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    amigoInput.value = '';
    amigoInput.focus();
    }
    };
  
    // Função para atualizar a lista de amigos na tela
    function atualizarListaAmigos() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
    const listItem = document.createElement('li');
    listItem.textContent = amigo;
    listaAmigos.appendChild(listItem);
    });
    }
  
    // Função para sortear o amigo secreto
    window.sortearAmigo = function() {
    if (amigos.length < 2) {
    resultadoLista.innerHTML = '<li class="error-message">Adicione pelo menos dois amigos para sortear.</li>';
    return;
    }
  
    // Embaralhar a lista de amigos
    const amigosEmbaralhados = [...amigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }
  
    // Criar os pares de amigo secreto
    let resultadoHTML = '';
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
    const amigoAtual = amigosEmbaralhados[i];
    const amigoSorteado = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
    resultadoHTML += `<li>${amigoAtual} --> ${amigoSorteado}</li>`;
    }
  
    resultadoLista.innerHTML = resultadoHTML;
    };
   });