"use strict"

let grupos = [

    {nombre: "ACDC", genero: "Rock"},
 
    {nombre: "Cold Play", genero: "Pop"},
 
    {nombre: "NCT Dream", genero: "K-Pop"},
 
    {nombre: "Metallica", genero: "Heavy Metal"}
 
];
 

 //filtra los grupos por género obtenido aquellos que son de Heavy Metal.
 let heavy = grupos.filter(g => g.genero === "Heavy Metal"); // .filter filtra elementos a través de la función, devuelve el primer/todos los valores que devuelven true
 console.log("Heavy Metal: ", heavy);

 //Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
 let cold = grupos.find(g => g.nombre === "Cold Play"); // filtra elementos a través de la función, devuelve el primer/todos los valores que devuelven true
 console.log("Cold Play: ", cold);

 //¿En qué posición del array se encuenta “Cold Play”?
 let posicion = grupos.findIndex(g => g.nombre === "Cold Play");
 console.log("Posición de Cold Play: ", posicion);


