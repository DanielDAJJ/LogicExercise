/* 
*Dada una lista de estudiantes con sus notas, agrúpalos por curso y calcula:
    *El promedio de notas por curso.
    *El estudiante con la nota más alta de cada curso.
*🎯 Objetivo
    *Agrupar estudiantes por curso.
    *Calcular el promedio de notas en cada curso.
    *Determinar el nombre del estudiante con la nota más alta en cada curso.
*/

//?Input

const estudiantes = [
    { nombre: "Ana", curso: "Matemáticas", nota: 85 },
    { nombre: "Luis", curso: "Matemáticas", nota: 90 },
    { nombre: "Pedro", curso: "Matemáticas", nota: 70 },
    { nombre: "Sofía", curso: "Historia", nota: 95 },
    { nombre: "María", curso: "Historia", nota: 80 },
    { nombre: "Carlos", curso: "Historia", nota: 88 },
    { nombre: "Lucía", curso: "Ciencias", nota: 92 },
    { nombre: "Andrés", curso: "Ciencias", nota: 78 }
];

const ClassGroup = (arr) => {
    const clases = {};
    
    arr.forEach(estudiante => {
        let materia = estudiante.curso;
        let notaActual = estudiante.nota;
        
        if (!clases[materia]) {
            clases[materia] = {promedio: 0, mejorEstudiante: estudiante.nombre, notaMax: notaActual, cantidadEstudiantes: 1, sumadorNotas: notaActual};
        } else {
            clases[materia].notaMax = clases[materia].notaMax > notaActual ? clases[materia].notaMax : notaActual;
            clases[materia].cantidadEstudiantes += 1;
            clases[materia].mejorEstudiante = clases[materia].notaMax > notaActual ? clases[materia].mejorEstudiante : estudiante.nombre;
            clases[materia].sumadorNotas += notaActual;
            clases[materia].promedio = clases[materia].sumadorNotas / clases[materia].cantidadEstudiantes;
        }
    });

    return console.log(clases);
};



ClassGroup(estudiantes);