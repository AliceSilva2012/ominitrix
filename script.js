let alienImagem = document.getElementById("imagem-alien");
let nomeAlien = document.querySelector(".campo-nome"); 

const listaDeAliens = [ //array = objeto/ caixa que guarda informaçoes.
    { nome: "Quatro Braços", imagem: "./img/quatrobracos.png" },
    { nome: "Chama", imagem: "./img/chama.png" },
    { nome: "Besta", imagem: "./img/besta.png" },
    { nome: "Diamante", imagem: "./img/diamante.png" },
    { nome: "XLR8", imagem: "./img/xlr8.png" },
    { nome: "Massa Cinzenta", imagem: "./img/massacinzenta.png" },
    { nome: "Fantasmático", imagem: "./img/fantasmatico.png" },
    { nome: "Ultra T", imagem: "./img/ultrat.png" },
    { nome: "Incectóide", imagem: "./img/incectoide.png" },
];

let alienAtual = 0;
nomeAlien.innerText = listaDeAliens[alienAtual].nome;

function mudarImagem() { //Fazendo a funçao pra atualizar a imagem e o alien ao mesmo tempo.
    alienAtual = alienAtual + 1;

    if (alienAtual >= listaDeAliens.length) { //tratamento de erro.
        alienAtual = 0;
    }
    //atualizando o que precisa.
    alienImagem.src = listaDeAliens[alienAtual].imagem; 
    nomeAlien.innerText = listaDeAliens[alienAtual].nome; 
}

alienImagem.addEventListener("click", mudarImagem); //rodando a funçao literalmente.
