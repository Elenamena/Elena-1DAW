```mermaid
classDiagram

class pelicula {
    + varchar titulo
    + varchar sipnosis
    + int año
    + varchar genero
    + varchar pais
    + pelicula()
}

class personaParticipante {
    + varchar nombre
    + varchar apellido
    + int fechaNacimiento
    + varchar nacionalidad
}

```