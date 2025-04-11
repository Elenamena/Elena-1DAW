"use strict"

let vidaJugador = 30;
let vidaMonstruo = 40;
let cantidadPociones = 5;
let ataqueMaxJugador = 10;
let ataqueMaxMonstruo = 15;
let curacionPocion = 15;

while (vidaJugador > 0 && vidaMonstruo > 0) {
    let elegir = prompt("Elige una opcion: atacarMonstruo, tomarPocion, buscarPocion (o salir):");

    if (elegir === atacarMonstruo) {
        let ataqueJugador = Math.random() * ataqueMaxJugador;
        vidaMonstruo = vidaMonstruo - ataque; // se le descuenta vida al monstruo
        alert("Has atacado al monstruo por ${ataque} puntos");
    }

    if (elegir === tomarPocion) {
        if (cantidadPociones > 0) {
            vidaJugador = vidaJugador + curacionPocion; // cuando el usuario utiliza pocion
            curacionPocion--; // se le descuenta pocion
            alert("Te quedan " + cantidadPociones + " pociones");
        } else {
            alert("No te quedan pociones :(");
        }
    }

    if (elegir === buscarPocion) {
        let buscar = Math.random() * 3;
        cantidadPociones++; // se le suman pociones
        alert("Has encontrado una poción :)");
    }

    if (elegir === salir) {
    alert("Ha terminado el programa :(");
    }

    else {
        alert("Elige correctamente");
    }


    if (vidaJugador > vidaMonstruo && vidaMonstruo <= 0) { // por si empatan los dos a 0 o si el monstruo tiene 0
        alert("Has ganado al monstruo!");
    }


    let ataqueMonstruo = Math.random() * ataqueMaxMonstruo;
    vidaJugador = vidaJugador - ataqueMonstruo; // se le descuenta vida al jugador
    alert("El monstruo te atacó con " + ataqueMonstruo + " puntos");
    alert("Te queda de vida: " + vidaJugador + ", al monstruo le queda de vida: ", vidaMonstruo);
    if (vidaJugador <= 0) {
        alert("El monstruo te ha ganado :(");
    }
}


