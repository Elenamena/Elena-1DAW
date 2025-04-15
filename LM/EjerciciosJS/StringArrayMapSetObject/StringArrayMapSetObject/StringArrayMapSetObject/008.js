"use strict"

// Crear un objeto vacío llamado dog
const dog = {};

// Imprime el objeto dog en la consola
console.log(dog);

// Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = "Manue"; // ;)
dog.legs = 7;
dog.color = "Purple";
dog.age = 63;
dog.bark = function() {
    return "woof woof";
};

// Obtener name, legs, color, age y el valor de bark del objeto dog
console.log("Name: ", dog.name);
console.log("Legs: ", dog.legs);
console.log("Color: ", dog.color);
console.log("Age: ", dog.age);
console.log("Bark: ", dog.bark());

// Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "Salchicha";
dog.getDogInfo = function() {
    return `${dog.name} es un perro de raza ${dog.breed} con ${dog.legs} patas y de color ${dog.color}`;
};

console.log(dog.getDogInfo());


