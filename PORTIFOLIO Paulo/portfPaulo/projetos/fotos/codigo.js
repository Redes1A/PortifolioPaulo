let imagens = ["aracaju.jpg", "manha.jpg", "tarde.jpg"]; //array
let indice = 0; //variável
let intervalo; //variável sem definição

function mudarImagem(){ //função
    document.getElementById("imagem").src = imagens[indice]
    indice = (indice + 1) % imagens.length;
}

function comecarMudar(){ //função
    intervalo = setInterval(mudarImagem, 1000) //setInterval executa uma função várias vezes em um determinado intervalo de tempo
}

function pararMudanca(){ //função
    clearInterval(intervalo); //o clearInterval limpa o tempo configurado pelo setInterval
}
