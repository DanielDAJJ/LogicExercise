//*Enunciado:Crea una función que reciba una cadena y devuelva cuántas vocales (a, e, i, o, u) contiene.

const vowels = ['a', 'e', 'i', 'o', 'u'];

let word = 'Cuentame Estas';
let word1 = 'Daniel';

const CountVowels = (word) => {
    let vowelsOnCount = 0;
    let lowerCaseWord = word.toLowerCase();

    for (let i = 0; i < lowerCaseWord.length; i++) {
        if(vowels.includes(lowerCaseWord[i])){
            vowelsOnCount ++;
        };
    }
    return vowelsOnCount;
}

console.log(CountVowels(word));
console.log(CountVowels(word1));
