"use strict"

let comida = prompt("¿Quieres almorzar o cenar?(almorzar/cenar)"); // se pregunta al usuario y dependiendo de su respuesta le aparecen unas comidas u otras
let vegetariano = prompt("¿Eres vegetariano?(si/no)");

if (comida === "almorzar" && vegetariano === "si") {
    alert("Pisto");
} else if (comida === "almorzar" && vegetariano === "no") {
    alert("Hamburguesa");
} else if (comida === "cenar" && vegetariano === "si") {
    alert("Ensalada");
} else if (comida === "cenar" && vegetariano === "no") {
    alert("Pizza");
} else {
    alert("Elige correctamente");
}


