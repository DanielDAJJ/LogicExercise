/* 
Dado un array de enteros, encuentra el número que más veces se repite.
Si hay empate, devuelve el primero que aparece entre los que más se repiten.
Ejemplo:
[1, 3, 2, 1, 4, 3, 1] → 1 (aparece 3 veces)  
[5, 2, 2, 3, 3, 5] → 5 (empate con 2 y 3, pero 5 aparece primero)  
[8, 8, 9, 9, 9, 8] → 8 (empate con 9, pero 8 aparece primero)
*/

const array = [1, 3, 2, 1, 4, 3, 1];
const array1 = [5, 2, 2, 3, 3, 5];
const array2 = [8, 8, 9, 9, 9, 8];

const RepeatNumber = (arr) => {
    const count = {};

    for (let num of arr) {
        count[num] ? count[num]++ : count[num] = 1;
    };

    let maxRepeat = 0;
    let result = null;

    for (let num of arr) {
        if(count[num] > maxRepeat) 
            maxRepeat = count[num];
            result = num
    }

    return result
};

console.log(RepeatNumber(array));
console.log(RepeatNumber(array1));
console.log(RepeatNumber(array2));
