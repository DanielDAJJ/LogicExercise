/* 🧠 Ejercicio #4 – “Suma condicional”
Crea una función que reciba dos números.

    Si ambos son iguales, retorna el triple de su suma.

    Si no son iguales, retorna solo la suma. */

    function SumaCondicional(a, b){
        const result = a === b ? (a + b) * 3 : a + b;
        console.log(`La suma condicional de ${a} y ${b} es: ${result}`);
        return result;
    };

    SumaCondicional(5, 5);
    SumaCondicional(5, 10);
    SumaCondicional(10, 10);