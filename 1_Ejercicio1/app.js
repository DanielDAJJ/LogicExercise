//*Objetivo: Escribe una función que reciba un número entero y devuelva true si es palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), o false si no lo es.

let num = 121;
let numA = 498;
let numB = 2794;
let numC = 2222;
let numD = 77177;

function isPalimdrome(num) {
    const strNum = num.toString();
    console.log(strNum);
    const reversed = strNum.split('').reverse().join('');
    console.log(reversed);    
    return console.log(strNum === reversed ? true : false);
}

isPalimdrome(num);
isPalimdrome(numA);
isPalimdrome(numB);
isPalimdrome(numC);
isPalimdrome(numD);