"use strict"

// Crea una función-objeto llamada hogwartsStudent
function hogwartsStudent() {
    this.nombre = "Hermione Granger";
    this.casa = "Gryffindor";
    this.mascota = "Crookshanks";
    this.asignaturas = ["Pociones", "Transformaciones", "Encantamientos"];
    this.anio = 3;
    this.sangre = "mestiza";
    this.prefecto = true;
}

// Muestra por consola el nombre completo del estudiante, la casa a la que pertenece y su mascota
console.log(`${this.nombre} es una estudiante de ${this.casa} con la mascota ${this.mascota}`);

// Añade una nueva propiedad al objeto llamada patronus y asígnale el valor "Nutria"
this.patronus = "Nutria";

// Agrega una nueva asignatura al array asignaturas, llamada "Defensa Contra las Artes Oscuras"
this.asignaturas.push("Defensa Contra las Artes Oscuras"); // .push para añadir un elemento

// Cambia el valor de la propiedad año a 4
this.año = 4;

// Elimina la propiedad sangre del objeto
delete this.sangre; // delete para eliminar

// Crea una función printHogwartsStudent que reciba el objeto hogwartsStudent y muestre por consola un resumen
function printHogwartsStudent() {
    console.log(`${this.nombre} es una estudiante de ${this.casa} en su ${this.anio} año. 
        Tiene una mascota llamada ${this.mascota} y su patronus es una ${this.patronus}. 
        Sus asignaturas son: ${this.asignaturas.join(", ")}.`); // .join para unir con la ,
}

// Invoca la función printHogwartsStudent() con el objeto modificado
printHogwartsStudent();

// Reutiliza la función-objeto
const ginny = new hogwartsStudent();
ginny.nombre = "Ginny Weasley";
ginny.casa = "Gryffindor";
ginny.anio = 4;
ginny.mascota = "Arnold";
ginny.patronus = "Caballo";
ginny.asignaturas = ["Encantamientos", "Vuelo", "Pociones", "Defensa Contra las Artes Oscuras"];

printHogwartsStudent(ginny);


