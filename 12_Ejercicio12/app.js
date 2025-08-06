/* 
*Ejercicio 1:

“Palabras únicas”
Tienes un array de palabras y debes devolver un nuevo array con solo aquellas que aparecen exactamente una vez, manteniendo el orden original.

?Entrada:
const palabras = ["gato", "perro", "pez", "gato", "conejo", "pez", "ratón"];

?Salida esperada:
["perro", "conejo", "ratón"]

*Nivel 2 – Map + lógica de índices
Ejercicio 2:

“Último índice de cada número”

Tienes un array de números. Devuelve un objeto donde cada número es una propiedad y su valor es el último índice en el que aparece.

?Entrada:
const numeros = [1, 4, 5, 4, 2, 5, 3, 1];

?Salida esperada:
{
    1: 7,
    4: 3,
    5: 5,
    2: 4,
    3: 6
}

*Ejercicio 3:

“Agrupar palabras por su primera letra”

Tienes un array de palabras y necesitas devolver un objeto donde las claves son las letras iniciales, y los valores son arrays con las palabras que empiezan por esa letra.

?Entrada:
const palabras = ["gato", "gallina", "perro", "pez", "pato", "ratón"];

?Salida esperada:
{
    g: ["gato", "gallina"],
    p: ["perro", "pez", "pato"],
    r: ["ratón"]
}

*/

//*Palabras unicas

const words = ["gato", "perro", "pez", "gato", "conejo", "pez", "ratón"];

const uniqueWords = (arr) => {
    const count = {};

    arr.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    });

    const output = arr.filter(word => count[word] === 1);

    return console.log(output);
    
};

uniqueWords(words);

//*Último índice de cada número

const numeros = [1, 4, 5, 4, 2, 5, 3, 1];

const NumberIndex = (arr) => {
    const objectNumber = {}

    arr.forEach(number =>{
        objectNumber[number] = arr.lastIndexOf(number)
    })

    return console.log(objectNumber);
    
};

NumberIndex(numeros);

//*“Agrupar palabras por su primera letra”

const palabras = ["gato", "gallina", "perro", "pez", "pato", "ratón"];

const Dictionary = (arr) => {
    const charReference = {};

    arr.forEach(word => {
        !charReference[word.at(0)] ? charReference[word.at(0)] = [word] : charReference[word.at(0)].push(word);
    });

    return console.log(charReference)
};

Dictionary(palabras);