"use strict"

class Course {
    
    // Crear una función para añadir estudiantes a un curso
    addStudent(student) {
        this.students.add(student);
    }

    // Crear una función para eliminar estudiantes de un curso
    deleteStudent(student) {
        this.students.delete(student);
    }

    // Crear una función para unir estudiantes de dos cursos diferentes
    mixCourses(otherCourse) {
        otherCourse.students.forEach(student => this.students.add(student));
    }

    // Crear una función para obtener estudiantes comunes entre dos cursos
    getCommonStudents(otherCourse) {
        let commonStudents = [];
        this.students.forEach(student => {
            if (otherCourse.students.has(student)) {
                commonStudents.push(student);
            }
        });
        return commonStudents;
    }

    // Crear una función que compruebe si un estudiante está en un curso específico
    hasStudent(student) {
        return this.students.has(student);
    }

    // Crear una función para vaciar completamente un curso
    clearCourse() {
        this.students.clear();
    }

}


