"use strict"

let disney = [

    { nombre: "Hércules", pelicula: "Hércules" },
 
    { nombre: "Megana", pelicula: "Hércules" },
 
    { nombre: "Hades", pelicula: "Hércules" },
 
    { nombre: "Campanilla", pelicula: "Peter Pan" },
 
    { nombre: "Wendy", pelicula: "Peter Pan" }

];
 
 //Meter a Peter Pan al final del array disney.
 disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" }); // .push añade un nuevo elemento/s al final de un array
 
 //Pintar el array
 console.log(disney);
 
 //Meter a El capitán Garfio al principio del array, no olvides la película
 disney.unshift({ nombre: "Capitán Garfio", pelicula: "Peter Pan" }); // .unshift agrega el elemento/s al principio del array
 
 //Meter al cocodrilo detrás del capitán, no olvides la película
 disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan" });
 
 //Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
 
 //Encontrar el índice de Campanilla.
 console.log("Índice de Campanilla: ", disney.findIndex(p => p.nombre === "Campanilla")); // .findIndex es similar a find, pero devuelve el índice en lugar del valor
 
 //Buscar al cocodrilo.
 console.log("Cocodrilo: ", cocodrilo);
 
 //Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
 function shuffle(disney) {
    for (let i = disney.lenght - 1; i > 0; i--) {
        let j = Math.random() * (i + 1);
        [disney[i], disney[j]] = [disney[j], disney[i]];
    }
    return array;
 }
 console.log(disney.shuffle);


