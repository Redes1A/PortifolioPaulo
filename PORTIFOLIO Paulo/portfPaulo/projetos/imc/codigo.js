
let calcular = document.getElementById("calcular"); // pegar valor do button

function imc(){
    let nome = document.getElementById("nome").value; // pegar valor do input
    let peso = +document.getElementById("peso").value; // pegar valor do input
    let altura = +document.getElementById("altura").value; // pegar valor do input
    let resultado = document.getElementById("resultado"); 
    let conceito = ""; //variável vazia

if(nome !== " " && peso !== " " && altura !== " "){ //se nome for diferente de vazio e peso diferente de vazio e altura diferente de vazio
    let imc = (peso / (altura * altura)).toFixed(1); //fórmula do imc

    if(imc < 18.5){ 
        conceito = "Você está abaixo do peso!";
    }else if(imc >= 18.6 && imc < 24.9){
        conceito = "Parabéns! Peso ideal!";
    }else{
        conceito = "Você está acima do peso!";
}

resultado.textContent = `${nome} seu IMC é ${imc} e ${conceito}`; //para preencher a did do resultado

}else{
    resultado.textContent = "Preencha o formulário corretamente!"; //para preencher a did do resultado
}

}

