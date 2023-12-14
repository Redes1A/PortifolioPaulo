let minutosDisplay = document.getElementById('minutos');
let segundosDisplay = document.getElementById('segundos');
let iniciarBotao = document.getElementById('iniciar');
let pararBotao = document.getElementById('parar');
let zerarBotao = document.getElementById('zerar');

let minutos = 0;
let segundos = 0;
let cronometroAtivo = false;

function atualizarDisplay(){
    minutosDisplay.textContent = minutos.toString().padStart(2, '0'); //padStart mudar a segunda casa dos minutos para 0
    segundosDisplay.textContent = segundos.toString().padStart(2, '0'); //padStart mudar a segunda casa dos segundos para 0
}

function iniciarCronometro(){
    if(!cronometroAtivo){
        cronometroAtivo = true;
        timer = setInterval(function(){
            segundos++;
            if(segundos === 60){
                segundos = 0;
                minutos++;
            }
            atualizarDisplay();
        }, 1000);
    }

}

function pararCronometro(){
    cronometroAtivo = false;
   clearInterval(timer)

    }


function zerarCronometro(){
    minutos = 0;
    segundos = 0;
    atualizarDisplay();
    pararCronometro(); 
}

iniciarBotao.addEventListener('click', iniciarCronometro);
pararBotao.addEventListener('click', pararCronometro);
zerarBotao.addEventListener('click', zerarCronometro);
