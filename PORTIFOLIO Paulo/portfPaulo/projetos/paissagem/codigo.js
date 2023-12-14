function mudaimagem(){
   let imagem = document.getElementById("imagem");
   let input = document.getElementById("momento").value.toLowerCase(); 
   if(input === "dia"){
    imagem.src = "dia.jpg";
    imagem.alt = "paisagem dia"
   }else if(input === "tarde"){
    imagem.src = "tarde.jpg"
    imagem.alt = "paisagem tarde"
   }else{
    imagem.src = "noite.jpg"
    imagem.alt = "paisagem noite"
   }
}



  
    