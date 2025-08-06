/* 
🔥 Ejercicio Nivel Intermedio:
👉 Eliminar los elementos duplicados del array, pero conservando únicamente el último valor repetido.
*/

//* Entrada
const datos = [3, 5, 2, 3, 5, 7, 2, 9, 5];

//? Salida

[3, 7, 2, 9, 5]

const BusquedaDeDuplicados = (arr) => {
    const nuevoArray = new Set ();
    const result = [];

    /* 
    for(let item of arr){
        if (!nuevoArray.has(item)) {
            nuevoArray.add(item)
        }
    }; */
    //*mejora
    for (let index = arr.length - 1; index >= 0; index -= 1) {
        const item = arr[index];
        if (!nuevoArray.has(item)) {
            nuevoArray.add(item);
            result.unshift(item);
        }
    }

    return console.log(result);
};

BusquedaDeDuplicados(datos);