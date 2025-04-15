"use strict"

let tarjeta = prompt("Ingresa tu numero de la tarjeta:");

if (tarjeta.length = 12) { // mismo proceso que el ejercicio anterior
    for (let i = 0; i < tarjeta.length; i++) {
        let digito = num[i];
        if (i % 2 === 1) {
            digito = digito * 2;
            if (digito > 9) {
                digito = digito - 9;
            }
        }
        let suma = suma + digito;
    }
    if (suma % 10 === 0) {
        alert("El numero es valido :)");
    } else {
        alert("El numero no es valido :(")
    }
} else {
    alert("Intenta otra vez");
}

if (tarjeta.startsWith("34") || tarjeta.startsWith("37") && tarjeta.length === 15) {
    alert("La tarjeta es American Express");
  } else if (tarjeta.startsWith("4") && (tarjeta.length === 13 || tarjeta.length === 16)) {
    alert("La tarjeta es Visa");
  } else if ((tarjeta.startsWith("51") || tarjeta.startsWith("52") || tarjeta.startsWith("53") || tarjeta.startsWith("54") || tarjeta.startsWith("55"))
    && tarjeta.length === 16) {
    alert("La tarjeta es MasterCard");
  } else {
    alert("Inválida :("); // sino cumple las condiciones anteriores no es valida
}


