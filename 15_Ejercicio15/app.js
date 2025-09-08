/* 
*Ejercicio 1 – Suma con reduce
Tienes este array:
const numeros = [5, 10, 15, 20];
?Tu tarea es usar reduce para obtener la suma total de todos los números.

No uses for, forEach ni map.

Solo reduce.

? Pista: el reduce necesita un acumulador (la suma hasta ahora) y el valor actual (el número que estás procesando).
El acumulador comienza en 0.
*/

const numeros = [5, 10, 15, 20]
const numeros2 = [7, 2, 9, 1, 4]

const numeroReducidos = numeros.reduce((acum, num)=>{
    return acum + num;
});
const numeroMultiplicados = numeros.reduce((acum, num)=>{
    return acum * num;
});
const numeroMayor = numeros2.reduce((acum, num)=>{
    acum > num ? acum : acum = num;
    return acum
}, 0);

console.log(numeroReducidos);
console.log(numeroMultiplicados);
console.log(numeroMayor);

