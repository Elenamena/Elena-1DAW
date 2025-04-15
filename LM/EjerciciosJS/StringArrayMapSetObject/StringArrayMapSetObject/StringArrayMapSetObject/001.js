"use strict"

let thor = "Thor es el hijo de Odín";

// Largo de la cadena
console.log("Largo de la cadena: ", thor.length);

//Encontrar la letra o
console.log("Letra o: ", thor.indexOf('o')); // .indexOf para saber cuál es la posición de un carácter

//Encontrar el carácter que ocupa la posición 3
console.log("Caracter posicion 3: ", thor.charAt(3)); // .charAt para buscar la posicion de un caracter concreto

//¿Qué carácter ocupa la posición 1?
console.log("Caracter posicion 1: ", thor.charAt(1));

//Trocea la cadena usando los espacios en blanco
let espacios = thor.split(" "); // .split nos permite convertir el string en un array con las subcadenas que quedan separadas por el carácter que le especifiquemos
console.log(espacios);

//Reemplaza Thor por Loki
console.log("Reemplazar: ", thor.replace("Thor", "Loki"));

//Recorta la cadena para que devuelva la palabra Odín
console.log("Odín: ", thor.slice(thor.indexOf("Odín")));

//¿Puedes encontrar la letra a? Demuéstralo
console.log("Letra a: ", thor.includes('a'));

//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let mitad = thor.length / 2;
console.log(thor.slice(0, mitad) + thor.slice(mitad).toLocaleLowerCase());


