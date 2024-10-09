/*
OBJETIVO: arquivo de criar cards de livro no html
DATA: 10/08/2024
Autor: Peu
Versão: 1.0
*/

// Importa o módulo de livros que contém os dados dos livros
import { livros } from "./livros.js"; // Aqui, estamos importando um objeto ou um array chamado 'livros' de um arquivo chamado 'livros.js'. Esse objeto deve conter informações sobre os livros que vamos usar para criar os cards.

const getDadosLivros = function () {
  // Função que será responsável por criar os cards dos livros no HTML.

  // Exibe o título do primeiro livro no console para fins de depuração
  console.log(livros[0].books[0].title); // Isso é útil para garantir que estamos recebendo os dados corretamente. Mostra o título do primeiro livro no console.

  // Seleciona o elemento div da HTML onde os cards de livro serão adicionados
  let cardProduto = document.getElementById("cardProdutos"); // Aqui, estamos buscando um elemento com o ID "cardProdutos" na página HTML, onde os cards serão inseridos.

  // Cria um novo elemento div que servirá como container para o card do produto
  let divCaixaProduto = document.createElement("div"); // Cria um novo elemento div que vai agir como o container do card.
  let h2Caixa = document.createElement("h2"); // Cria um elemento h2 para o título do livro.
  let textoTitulo = document.createTextNode("nome do livro"); // Cria um nó de texto com o título do livro.
  let figureImagem = document.createElement("figure"); // Cria um elemento figure para conter a imagem.
  let img = document.createElement("img"); // Cria um elemento de imagem.

  // Adiciona uma classe ao novo div para aplicar estilos CSS
  divCaixaProduto.setAttribute("class", "caixa_produto"); // Adiciona a classe CSS "caixa_produto" ao container do card para estilização.
  h2Caixa.setAttribute("class", "caixa_titulo"); // Adiciona a classe "caixa_titulo" ao título.
  figureImagem.setAttribute("class", "caixa_imagem"); // Adiciona a classe "caixa_imagem" à figura que contém a imagem.
  img.setAttribute("src", "imagens/icone01.png"); // Define a fonte da imagem, que será exibida no card.
  img.setAttribute("alt", "foto do livro"); // Adiciona um texto alternativo que descreve a imagem, útil para acessibilidade.
  img.setAttribute("title", "foto livro"); // Define um título que aparece ao passar o mouse sobre a imagem.

  // Estrutura do card: adiciona os elementos criados na hierarquia correta
  cardProduto.appendChild(divCaixaProduto); // Insere o container do card dentro do elemento principal "cardProdutos".
  divCaixaProduto.appendChild(h2Caixa); // Insere o título (h2) dentro do container do card.
  h2Caixa.appendChild(textoTitulo); // Adiciona o texto do título ao elemento h2.
  divCaixaProduto.appendChild(figureImagem); // Adiciona a figura ao container do card.
  figureImagem.appendChild(img); // Insere a imagem dentro da figura.

};

// Adiciona um evento que chama a função getDadosLivros quando a página é completamente carregada
window.addEventListener("load", function () {
  getDadosLivros(); // Quando a página terminar de carregar, a função getDadosLivros é chamada para criar os cards dos livros.
});
