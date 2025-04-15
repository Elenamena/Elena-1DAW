"use strict"

let fruits = ["Banana", "Manzana", "Fresa"];

//Añadimos cereza al principio
console.log(fruits.unshift("Cereza")); // .unshift agrega el elemento/s al principio del array

//Añadimos melocotón al final
console.log(fruits.push("melocotón")); // .push añade un nuevo elemento/s al final de un array

//Mostrar el array elemento a elemento con forEach
console.log(fruits.forEach);

//Eliminamos el primer elemento.
console.log(fruits.shift);

//Eliminamos el último elemento.
console.log(fruits.pop);

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.
fruits.forEach((fruit, index) => {
    console.log("Elemento ${index}: ${fruit}")
});


