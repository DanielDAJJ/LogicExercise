//*Enunciado: Crea una función que reciba un array de números y devuelva un nuevo array sin valores duplicados, manteniendo el orden original.

const arrayTest = [1, 2, 2, 3, 4, 4, 5];
const arrayTest2 = [1, 1, 1, 2, 2, 2, 3];


const RemovePairs = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const arrayItem = array[i];
        if (!newArray.includes(arrayItem)) {
            newArray.push(arrayItem)
        }
    }
    return newArray
}

console.log(RemovePairs(arrayTest));
console.log(RemovePairs(arrayTest2));
