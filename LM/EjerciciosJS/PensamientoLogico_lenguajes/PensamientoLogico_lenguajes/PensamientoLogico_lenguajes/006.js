"use strict"

let numero = prompt("Ingresa un numero:");

if (numero.length === 12) { // verificar que el numero introducido es de 12 digitos
    for (let i = 0; i < numero.length; i++) {
        let digito = num[i];
        if (i % 2 === 1) { 
            digito = digito * 2;
            if (digito > 9) { // si es mayor de 9 se resta 9
                digito = digito - 9;
            }
        }
        let suma = suma + digito;
    }
    if (suma % 10 === 0) { // si al dividirlo entre 10 da 0
        alert("El numero es valido :)");
    } else {
        alert("El numero no es valido :(")
    }
} else {
    alert("Intenta otra vez");
}


