function changeImage(){
    let image = document.getElementById("myImage");
    if(image.src.match("desligada")){
        image.src = "ligada.png"
    }else{
        image.src = "desligada.png"
    }
}
