"use strict"

function array() {
    let numeros = [];
    while (numeros.length < 7) {
        let random = Math.random() * 10;
        if (!numeros.includes(random)) { // .includes devuelve un valor booleano según si nuestra cadena contiene la que le 
            pasamos
            numeros.push(random);
        }
    }
    return numeros;
}
console.log("Los 7 numeros aleatorios: ", array());


