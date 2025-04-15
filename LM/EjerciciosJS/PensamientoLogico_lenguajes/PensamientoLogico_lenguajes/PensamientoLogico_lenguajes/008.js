"use strict"

let acierto = 0;
let rondas = 0;
let maxRondas = 0;

let elegir = prompt("Elige entre cara o cruz (o salir):");

while (elegir !== salir){
    let resultado = Math.random() < 0.5 ? "cara" : "cruz"; // operador ternario para que salga cara o cruz
    alert("Ha salido ${resultado}");

    if (elegir === resultado) { // si acierta se van sumando los aciertos
        alert("Has acertado!");
        acierto = acierto + 1;
        alert("Van acertadas ${acierto} rondas")
        maxRondas = acierto;
        alert("El maximo de rondas acertadas ha sido de ${maxRondas} rondas");
    } else if (elegir !== resultado) { // sino acierta el contador vuelve a 0
        acierto = 0;
        maxRondas = acierto;
        alert("No has acertado :(");
    } else {
        alert("Opción incorrecta");
    }
}

if (elegir === salir) {
    alert("El maximo de rondas acertadas ha sido de ${maxRondas} rondas");
    alert("Nos vemos!");
}


