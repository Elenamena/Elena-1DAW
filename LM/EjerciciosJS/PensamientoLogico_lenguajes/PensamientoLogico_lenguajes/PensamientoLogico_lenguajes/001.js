"use strict"

let numeros = "";

for (let i = 1; i <= 100; i++) { // numeros del 1 al 100
    if (i % 3 === 0) { // si el numero al dividirlo con 3 da 0
        alert("miel");
    } else if (i % 5 === 0) { // si el numero al dividirlo con 5 da 0
        alert("oso");
    } else if (i % 15 === 0) { // si el numero al dividirlo con 15 da 0
        alert("meloso");
    } else {
        numeros = numeros; // sino cumple nada de lo anterior
    }
};

alert(numeros);


