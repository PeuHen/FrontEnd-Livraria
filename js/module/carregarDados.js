/*
OBJETIVO: arquivo de criar cards de livro no html
DATA: 10/08/2024
Autor: Peu
Versão: 1.0
*/

// Importa o módulo de livros que contém os dados dos livros
import { livros } from "./livros.js"; // Aqui, estamos importando um objeto ou um array chamado 'livros' de um arquivo chamado 'livros.js'. Esse objeto deve conter informações sobre os livros que vamos usar para criar os cards.

const getDadosLivros = function(){
    console.log(livros[0].books[0].title)

    //Recebendo o objeto <div> principal que irá ter todos os cards criados
    let cardProdutos = document.getElementById('cardProdutos')
    
    //Criamos uma tag no HTML para uma div
    let divCaixaProduto     = document.createElement('div')
    let h2CaixaTitulo       = document.createElement('h2')
    //Permite criar uma área de texto para colocar em algum elemento HTML
    let textoTitulo         = document.createTextNode('Nome do Livro')
    let figureCaixaImagem   = document.createElement('figure')
    let img                 = document.createElement('img')
    let divCaixaTexto       = document.createElement('div')
    let pCaixaTexto         = document.createElement('p')
    let textoDescricao      = document.createTextNode('Descrição do Livro')

    //Adiciona um novo atributo em uma tag no HTML
    divCaixaProduto.setAttribute('class', 'caixa_produto')
    h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
    figureCaixaImagem.setAttribute('class', 'caixa_imagem')
    img.setAttribute('src', 'imagens/icone01.png')
    img.setAttribute('alt', 'Foto do livro')
    img.setAttribute('title', 'Foto do Livro')
    divCaixaTexto.setAttribute('class', 'caixa_texto')
    

    //divCaixaProduto.setAttribute('id', 1)

    //Adicionei a nova div dentro do elemento pai (cardProdutos)
    cardProdutos.appendChild(divCaixaProduto)
    divCaixaProduto.appendChild(h2CaixaTitulo)
    h2CaixaTitulo.appendChild(textoTitulo)
    divCaixaProduto.appendChild(figureCaixaImagem)
    figureCaixaImagem.appendChild(img)
    divCaixaProduto.appendChild(divCaixaTexto)
    divCaixaTexto.appendChild(pCaixaTexto)
    pCaixaTexto.appendChild(textoDescricao)

}

// Adiciona um evento que chama a função getDadosLivros quando a página é completamente carregada
window.addEventListener("load", function () {
  getDadosLivros(); // Quando a página terminar de carregar, a função getDadosLivros é chamada para criar os cards dos livros.
})
