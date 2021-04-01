let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let simbolos = ["♦", "♥", "♠", "♣"];
let colores = ["red", "black"]

window.onload = () => {
    //generar aleatorios
    let numeroAleatorio = Math.floor((Math.random() * numeros.length));
    let simboloAleatorio = Math.floor((Math.random() * simbolos.length));
    let colorAleatorio = Math.floor((Math.random() * colores.length));

    //capturar elementos a manipular
    let simbolo = document.querySelectorAll(".card-symbol");
    let numero = document.querySelector(".card-title");
    
    simbolo.forEach(tag =>{
        tag.innerHTML = simbolos[simboloAleatorio];
        tag.style.color = colores[colorAleatorio];

    })

    numero.innerHTML = numeros[numeroAleatorio];
    numero.style.color = colores[colorAleatorio];

}

const genCarta = () => {
    window.onload();
}