/*
Dado un array de enteros, devuelve el primer número que se repite (es decir, el primero que ya se había visto antes mientras recorremos el array).
Si no hay repetidos, devuelve null.
*/

const firstRepeatNumber = (arr) => {
    const viewNumber = new Set();
    for(let num of arr){
        if (viewNumber.has(num)) {
            return num;
        }
        viewNumber.add(num);
    }
    return null;
}

const array1 = [1,5,1,4,5,8,4,1,2]
const array2 = [1,5,4,8,2]

console.log(firstRepeatNumber(array1));
console.log(firstRepeatNumber(array2));
