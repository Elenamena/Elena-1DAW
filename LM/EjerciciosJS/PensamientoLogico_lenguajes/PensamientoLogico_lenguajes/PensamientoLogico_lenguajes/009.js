"use strict"

let colores = ["rojo", "azul", "verde", "amarillo"];
let secuencia = [];
let ronda = 0;
let colorAleatorio = Math.random() * colores.length;
let usuario = prompt("¿Quieres elegir numero de rondas o que sean infinitas? (elegir/infinitas)"); // darle la opcion de elegir

if (usuario === elegir) {
  let numero = prompt("¿Cuantas rondas quieres?");
  for (numero = 0; i = numero; i++) {
    secuencia.push(colorAleatorio); // secuencia de colores aleatorio
    alert("Simón dice: ", secuencia.join(", "));
  }
} else if (usuario === infinitas) {
  let seguir = true;
  while (seguir) {
    ronda = ronda + 1;
    secuencia.push(colorAleatorio);
    alert("Simón dice: " + secuencia.join(", "));

    for (let i = 0; i < secuencia.length; i++) {
      let entrada = prompt("Color " + (i + 1) + ":").toLowerCase().trim();
      if (entrada !== secuencia[i]) { // si lo que ha introducido el usuario no es igual a la secuencia
        alert("Has fallado :( , has sobrevivido " + (ronda - 1) + " ronda/s");
        seguir = false;
      }
    }

    if (seguir !== null) {
      alert("Has ganado :)");
      seguir = false;
    }

    if (seguir) {
      alert("¡Has acertado :)! Pasas a la siguiente ronda.");
    }
  }   
}



// Lo he intentado :( (he llegado a puntos en los que no sabia ni lo que estaba haciendo :) ) 