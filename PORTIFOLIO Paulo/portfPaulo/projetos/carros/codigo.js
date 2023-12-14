let cars = [
    {name: "carro azul", image: "azul.jpg", renteImage: "alugado.png"},
    {name: "carro branco", image: "branco1.jpg", renteImage: "alugado.png"},
    {name: "carro vermelho", image: "vermelho1.jpg", renteImage: "alugado.png"},
];

let carsDiv = document.getElementById("cars");

cars.forEach(function(car){
    let carDiv = document.createElement("div"); //criou uma div
    carDiv.className = "car";

    let carName = document.createElement("h2"); //criou um h2 e colocou dentro da div
    carName.textContent = car.name;
    carDiv.appendChild(carName);

    let carImage = document.createElement("img"); //criou uma imagem e colocou dentro da div
    carImage.src = car.image;
    carDiv.appendChild(carImage);

    let rentButton = document.createElement("button"); //criou um botão
    rentButton.textContent = 'Alugar';
    rentButton.onclick = function(){
        this.parentNode.removechild(this);
        carImage.src = car.rentedImage;
    }

    carDiv.appendChild(rentButton);
    carsDiv.appendChild(carDiv);
}
)