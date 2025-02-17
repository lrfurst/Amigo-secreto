# Amigo Secreto - Aplicação Web

## Descrição

Esta aplicação web permite organizar um amigo secreto de maneira simples e eficiente. Os usuários podem adicionar nomes de amigos a uma lista e, em seguida, sortear aleatoriamente um nome para determinar o amigo secreto.

## Funcionalidades

- **Adicionar Nomes**: Insira o nome de um amigo no campo de texto e clique em "Adicionar" para incluí-lo na lista.
- **Validação de Entrada**: O sistema notificará se o campo de texto estiver vazio, solicitando a inserção de um nome válido.
- **Visualizar Lista**: Todos os nomes adicionados são exibidos em uma lista visível na página.
- **Sorteio Aleatório**: Clique em "Sortear Amigo" para selecionar um nome aleatório da lista.
- **Exibir Resultado**: O nome sorteado é exibido em destaque na página.

## Pré-requisitos

- Navegador web atualizado (Chrome, Firefox, Edge, Safari).
- Conhecimentos básicos de HTML, CSS e JavaScript para personalização e extensão da aplicação.

## Instalação

Clone este repositório para o seu computador.
   ```bash

   git clone https://github.com/lrfurst/Amigo-secreto

1) Estrutura do Projeto

    index.html: Arquivo HTML principal que estrutura a página e inclui links para os arquivos CSS e JavaScript.
    style.css: Folha de estilos CSS que define a aparência da aplicação.
    app.js: Script JavaScript que implementa as funcionalidades de adicionar nomes, validar entradas e realizar o sorteio.

2) Como Executar

    Adicionar nomes:
        Digite o nome do amigo no campo de texto.
        Clique no botão "Adicionar".
        Os nomes válidos serão listados abaixo do campo de entrada.

    Sortear amigo secreto:
        Clique no botão "Sortear Amigo".
        Se houver nomes na lista, um será sorteado e exibido na seção de resultados.

3) Dependências

    Fontes do Google Fonts: Utilizadas para melhorar a estética da aplicação (Inter e Merriweather).
    Plotly.js (opcional): Se futuramente você desejar adicionar gráficos interativos para visualização de dados.

4) Customização

Para personalizar a aplicação, você pode:

    Alterar o estilo: Modifique o arquivo style.css para ajustar cores, fontes e disposição dos elementos.
    Adicionar Funcionalidades: Estenda o código JavaScript em app.js para incluir novas funcionalidades, como limpar a lista ou adicionar categorias ao sorteio.

5) Acessibilidade

    Atributos ARIA: Incluídos para melhorar a acessibilidade e usabilidade por dispositivos assistivos.
    Alertas: Utilizados para fornecer feedback imediato ao usuário em caso de entradas inválidas.

6) Potenciais Problemas e Soluções

    Problema: O sorteio pode incluir o mesmo nome repetidamente se a lista tiver entradas duplicadas.
        Solução: Implementar uma lógica para remover nomes duplicados antes do sorteio.

    Problema: O script pode não funcionar corretamente se os elementos HTML não forem carregados antes da execução do JavaScript.
        Solução: Utilize defer no atributo do tag <script> para garantir que o script seja executado após o carregamento do HTML.

7) Licença

Este projeto está sob a licença MIT. Você pode modificar e distribuir conforme necessário, desde que o aviso de copyright seja mantido.
Autor

- **Nome**: [Luis Furst]
- **GitHub**: [lrfurst](https://github.com/lrfurst)
- **Foto**: ![Foto do Autor](https://github.com/lrfurst "Foto do Autor")

    ![Seu Nome](https://photos.google.com/photo/AF1QipPTdE6bqD6Do8ovlCwLMBcweiiz3ZDv8uKFNhBk "Foto do Autor")

8) Contribuições

Contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição para este projeto é muito bem-vinda!
Contato

Para dúvidas ou sugestões, por favor, entre em contato via email: furst.luis@email.com.
