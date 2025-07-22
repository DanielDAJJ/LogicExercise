/* 
Dado un array de números, escribe una función que devuelva un nuevo array con los números que no se repiten. Es decir, solo deben quedar los números únicos, que aparecen una sola vez.
*/

//* Entrada:
const numeros = [4, 5, 9, 4, 7, 5, 2];
const numeros2 = [8, 9, 5, 5, 4, 4, 1, 2];

//? Salida esperada:
[9, 7, 2]

const NumerosIguales = (arr) => {
    const count = {};

    arr.forEach(number => {
        count[number] = (count[number] || 0) + 1;
    });

    return console.log(arr.filter(num => count[num] === 1))
};

NumerosIguales(numeros);
NumerosIguales(numeros2);
con 