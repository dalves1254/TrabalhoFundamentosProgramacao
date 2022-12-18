# Trabalho de Fundamentos da Programação
P3 de Informática
Professor: César Olavo

Atividade da disciplina de Fundamentos da Programação para realizar as seguintes modificações no código disponível em: https://github.com/chrisdixon161/fun-javascript-projects.com

1. Substituir a imagem do fone de ouvido por uma outra de seu gosto.

2. Modificar a cor de fundo do player para a cor de sua preferência.

3. Modificar a fonte usada no player para a de sua preferência.

4. Modificar as músicas com as suas preferidas. 

5. Exibir na lista de músicas o título apenas, sem a extensão do arquivo.

6. Modifique o código para quando você clicar sobre a barra de progresso, a música avançar para o ponto correspondente.

## Questão à parte das modificações

7. Explique, com suas próprias palavras, o que faz o seguinte trecho de código:
```
const createSongList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};
```
<b>R.:</b> Trata-se de uma <i>arrow function</i> que prepara a exibição das canções na tela, acessando uma lista anterior com os endereços dos arquivos definida anteriormente no código. Ela cria, dentro de um laço "for" (pois é uma operação que precisará se repetir indeterminadamente ou várias vezes, tendo em vista seu objetivo), uma variável ```item``` que exibirá a música, então ajusta para fazer o acesso ao arquivo; depois dá um comando para adicionar o item à lista de reprodução.
