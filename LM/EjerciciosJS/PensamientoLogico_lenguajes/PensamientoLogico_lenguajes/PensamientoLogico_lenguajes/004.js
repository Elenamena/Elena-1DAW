"use strict"

const diaCumple = "23"; // variables constantes porque no cambian
const mesCumple = "1";
let vidas = "10";

while (vidas > 0) {
    let diaIngresado = prompt("Ingresa el dia de mi cumple:");
    let mesIngresado = prompt("Ingresa el mes de mi cumple:");

    if (diaCumple === diaIngresado && mesCumple === mesIngresado) {
        alert("Has ganado! :)");
    } else {
        vidas--;
        alert("Incorrecto");
        if (vidas === 0) {
         alert("Has perdido :(");
        }
   }
}


