"use strict"

// 1. Array vacio
let arrayVacio = [];

// 2. Array con 5 elementos
let array = [10, 20, 30, 40, 50, 60, 70];

// 3. Longitud del array
let longitudArray = array.length; // .length para medir la longitud
console.log(longitudArray);

// 4. Primer elemento, elemento del medio y ultimo elemento del array
let primerElemento = array[0];
let elementoMedio = array[array.length / 2];
let ultimoElemento = array[array.length - 1];

// 5. Diferentes tipo de datos en el array
let mixedDataTypes = [3, true, null, undefined, "hola", String];


// 6. Array con valores
let itCompanies = ["Facebook", "Google", "Microsoft", "Appel", "IBM", "Oracle", "Amazon"];

// 7. Imprimir array con console.log()
console.log(itCompanies);

// 8. Imprimir numero de empresa del array
console.log(itCompanies.length);

// 9. Imprimir primera empresa, empresa del medio y la ultima
console.log("Primera empresa: ", itCompanies[0]);
console.log("Empresa del medio: ", itCompanies[itCompanies.length / 2]);
console.log("Última empresa: ", itCompanies[itCompanies.length - 1]);

// 10. Imprimir cada empresa
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies);
}

// 11. Cambiar nombre de cada empresa a mayúsculas uno por uno e imprimirlos
itCompanies.forEach(console.log(toUpperCase())); // .forEach llama a cada elemmento, no devuelve nada

// 12. Imprimir array como oracion
console.log("${itCompanies.join(",")} son empresas muy importantes en nuestro país"); // .join para unir los elementos

// 13. Compruebar si existe una determinada empresa en el array itCompanies
let comprobar = prompt("¿Qué empresa quieres buscar?:")

if (itCompanies.includes(comprobar)) { // .includes devuelve un valor booleano, en este caso para saber si esta algo en concreto
    console.log("${comprobar} si está en el array :)");
} else {
    console.log("${comprobar} no está en el array :(");
}

// 14. Filtrar las empresas que tienen mas de una o sin el metodo filter
let mas = [];

for (let i = 0; i < itCompanies.length; i ++) {
    let contar = 0;
    if (char === 'o') {
        contar = contar + 1;
        if (contar > 1) {
            console.log("Empresas con mas de una o: ", mas);
        }
    }
}

// 15. Ordenar el array usando el método sort()
console.log("Array ordenado:", itCompanies.sort); // .sort ordena un array de forma alfabética

// 16. Invertir el array usando el método reverse()
console.log("Array invertido: ", itCompanies.reverse); // .reverse invierte el orden de los elementos de un array

// 17. Cortar las primeras 3 empresas del array
console.log("3 primeras empresas: ", itCompanies.slice(0, 3)); // .slice para extraer la subcadena contenida entre dos posiciones

// 18. Cortar las últimas 3 empresas del array
console.log("3 ultimas empresas: ", itCompanies.slice(-3));

// 19. Cortar la empresa o empresas intermedias de TI del array
let cortar = itCompanies.length / 2;
console.log("Empresa/s intermedias: ", itCompanies.slice(cortar));

// 20. Eliminar la primera empresa de TI del array
console.log(itCompanies.shift); // .shift obtiene el elemento del principio, avanzando la cola, y, así el segundo elemento se vuelve primero.

// 21. Eliminar la empresa o empresas intermedias de TI del array
let cortar2 = itCompanies.length / 2;
console.log(itCompanies.splice(cortar2, 1)); // .splice borra tantos elementos como le especifiquemos, además de ser capaz de añadir elementos nuevos en su lugar.

// 22. Elimine la última empresa de TI del array
console.log(itCompanies.pop()); // .pop borra el último elemento de un array

// 23. Eliminar todas las empresas de TI
itCompanies.length = 0;
console.log(itCompanies.length);


