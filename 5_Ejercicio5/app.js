/* 🧠 Ejercicio #2 – “Número en rango con excepción”
✅ Instrucciones:

Crea una función que reciba un número y siga estas reglas:

    Si el número está entre 90 y 99 (inclusive), devuelve true.

    A excepción del número 95, que debe devolver false.

    Para cualquier otro número fuera del rango, devuelve false. */

function NumberInRange(number) {
    if(number === 95){
        return false
    } else if (number >= 90 && number <= 99) {
        return true
    } else {
        return false
    }
}

console.log(NumberInRange(94));
console.log(NumberInRange(95));
console.log(NumberInRange(80));
