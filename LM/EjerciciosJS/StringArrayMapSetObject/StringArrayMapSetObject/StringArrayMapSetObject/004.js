"use strict"

let acdc= { name: "ACDC", age: 25 };

let metallica = { name: "Metallica", age: 30 };

let guns= { name: "Guns and Roses", age: 28 };

let bands = [ acdc, metallica, guns];

let names = bands.map(band => band.name); // .map crea un nuevo array a partir de los resultados de llamar a la func para cada elemento
alert(names);


