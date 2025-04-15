"use strict"

// Crear un Set vacío llamado code
const code = new Set();

// Añadir al Set los siguientes elementos (respetando el orden): "JavaScript", "Python", "Java", "JavaScript" (duplicado), "C++"
code.add("JavaScript"); // add para añadir
code.add("Python");
code.add("Java");
code.add("JavaScript"); // Duplicado
code.add("C++");

// Mostrar por consola el contenido inicial del Set y observar si se han insertado elementos duplicados
console.log("Contenido inicial del Set:", code);

// Comprobar mediante el método has() si existen los elementos "Java" y "Ruby". Mostrar los resultados en consola
console.log("¿Java?", code.has("Java"));
console.log("¿Ruby?", code.has("Ruby"));

// Eliminar el elemento "C++" usando el método delete() y mostrar el contenido actualizado
code.delete("C++"); // delete para eliminar
console.log("Contenido actualizado:", code);

// Iterar sobre los elementos del Set utilizando forEach() e imprimir cada elemento por consola
console.log("Iterar sobre los elementos del Set:");
code.forEach((item) => console.log(item));

// Mostrar el número total de elementos actuales en el Set utilizando la propiedad size
console.log("Número total de elementos en el Set:", code.size);

// Eliminar todos los elementos del Set con el método clear() y mostrar el Set vacío y su nuevo tamaño
code.clear(); // para eliminar
console.log("Set vacío:", code); // vacio
console.log("Número total de elementos después de clear():", code.size); // nuevo tamaño


