"use strict"

let monos = prompt("Ingresa los monos: "); // pedir al usuario bananas y monos
let bananas = prompt("Ingresa las bananas: ");
let total = 0;

if (bananas >= monos) { // si hay mas bananas que monos se hace la operacion
    total = bananas/monos;
    alert("Cada mono come ${total} bananas");
} else {
    alert("No hay suficientes bananas para cada mono :(");
}


