/* 
Consigna:

Crea un arreglo de estudiantes con sus notas.

Divide el problema en funciones:

?calcularPromedio(notas) → devuelve el promedio de un array de notas.

?clasificarEstudiante(promedio) → devuelve “Aprobado” o “Reprobado” según el promedio.

?mostrarResultado(nombre, promedio, estado) → imprime en consola el resultado bonito.

Recorre la lista de estudiantes, usa esas funciones y muestra en consola los resultados.
*/

const alumnos = [
    { nombre: "Ana", notas: [4.5, 3.8, 5.0] },
    { nombre: "Luis", notas: [2.5, 3.0, 2.8] },
    { nombre: "Marta", notas: [4.0, 4.2, 3.9] }
];

/*
const promedioNotas = (arr) => {
    const sumaNotas = arr.reduce((acc, nota)=> acc + nota, 0);
    return (sumaNotas / arr.length).toFixed(2);
};

const calificarEstudiante = (promedio) => {
    return promedio >= 3.0 ? "El estudiante ha aprobado" : "El estudiante debe repetir el curso";
};

const mostrarResultado = (nombre, promedio, estado) => {
    console.log(`${nombre} tiene un promedio de ${promedio} -> ${estado}`)
};

for (let estudiante of estudiantes) {
    const promedio = promedioNotas(estudiante.notas);
    const estado = calificarEstudiante(promedio);
    mostrarResultado(estudiante.nombre, promedio, estado);
} */

class Estudiantes {
    constructor(nombre, notas = []) {
        this.nombre = nombre;
        this.notas = notas ?? [];
    }

    calcularPromedio (arr) {
        let promedio =  (arr.reduce((acc, nota) => acc + nota, 0)) / arr.length;
        return promedio.toFixed(2);
    }

    calificar (promedio) {
        return promedio >= 3.0 ? "El estudiante a aprobado" : "El estudiante debe repetir el curso";
    }

    mostrarResultado(){
        let promedio = this.calcularPromedio(this.notas);
        let resultado = this.calificar(promedio);
        console.log(`${this.nombre} tiene un promedio de ${promedio} -> ${resultado}`);
    }
}

for (let estudiante of alumnos) {
    const estudianteObj = new Estudiantes(estudiante.nombre, estudiante.notas);
    estudianteObj.mostrarResultado();
}

