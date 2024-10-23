/******************************************************************************************************
 * Objetivo: arquivo para criar cards de livros no html
 * data 08/10
 * autor: Peu
 * Versão: 1.0
 * 
 ********************************************************************************************************/

import {livros} from './livros.js'

const setDadosLivros = function (listaDeLivros) {
    
    // Recebendo o objeto <div> principal que irá ter todos os cards criados
    let cardProdutos = document.getElementById('cardProdutos');
    listaDeLivros.books.forEach(function(item) {
        // Criamos uma tag no html para uma div
        let divCaixaProduto = document.createElement('div');
        let h2CaixaTitulo = document.createElement('h2');

        // Permite criar uma área de texto para colocar em algum elemento HTML
        let textoTitulo = document.createTextNode(item.title);
        let figureCaixaImagem = document.createElement('figure');
        let img = document.createElement('img');
        let divCaixaTexto = document.createElement('div');
        let pCaixaTexto = document.createElement('p');
        let textoDescricao = document.createTextNode(item.subtitle);

        // Adiciona um novo atributo em uma tag no HTML
        divCaixaProduto.setAttribute('class', 'caixa_produto');
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo');
        figureCaixaImagem.setAttribute('class', 'caixa_imagem');
        img.setAttribute('src', item.image);
        img.setAttribute('alt', 'Foto do Livro');    
        img.setAttribute('title', 'Foto do Livro de Tecnologia JS');
        divCaixaTexto.setAttribute('class', 'caixa_texto');

        // Adiciona a nova div dentro do elemento pai (cardProdutos)
        cardProdutos.appendChild(divCaixaProduto);
        divCaixaProduto.appendChild(h2CaixaTitulo);
        h2CaixaTitulo.appendChild(textoTitulo);
        divCaixaProduto.appendChild(figureCaixaImagem);
        figureCaixaImagem.appendChild(img);
        divCaixaProduto.appendChild(divCaixaTexto);
        divCaixaTexto.appendChild(pCaixaTexto);
        pCaixaTexto.appendChild(textoDescricao);
    });
}
  
// Função para buscar os livros da API de forma assíncrona
const getLivrosAPI = async function() {
    // URL da API que fornece os dados dos livros
    let url = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros';

    // 'await' faz com que a execução espere até que a promessa (promise) do fetch seja resolvida
    // Isso significa que a linha abaixo só será executada após a resposta da requisição
    let response = await fetch(url);
    
    // Espera a resposta ser convertida em JSON antes de continuar
    let dadosLivros = await response.json();
    
    // Passa os dados dos livros para a função que irá criar os cards
    setDadosLivros(dadosLivros);
}   

// Quando a página carrega, a função getLivrosAPI é chamada
window.addEventListener('load', function() {
    // getDadosLivros(livros[0].books)
    getLivrosAPI();
});
