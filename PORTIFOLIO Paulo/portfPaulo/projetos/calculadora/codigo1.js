function calculadora(){
    let operacao = prompt("Escreva o nome da operação:")
    if(operacao == "soma"){
        let x = Number(prompt("Digite o valor de x:"));
        let y = Number(prompt("Digite o valor de y:"));
        alert(soma(x , y));
    }
    else if(operacao == "subtracao"){
        let x = Number(prompt("Digite o valor de x:"));
        let y = Number(prompt("Digite o valor de y:"));
        alert(subtracao(x , y));   
    }
    else if(operacao == "divisao"){
        let x = Number(prompt("Digite o valor de x:"));
        let y = Number(prompt("Digite o valor de y:"));
       alert(divisao(x , y));
    } 
    else if(operacao == "multiplicacao"){
        let x = Number(prompt("Digite o valor de x:"));
        let y = Number(prompt("Digite o valor de y:"));
        alert(multiplicacao(x , y));   
    }else{
        prompt("Digite novamente!");
    }
    function soma(x , y){
        return x + y;
    }
    function subtracao(x , y){
        return x - y;
    }
    function divisao(x , y){
        return x / y;
    }
    function multiplicacao(x , y){
        return x * y;
    }
}
calculadora();