/* 
Escribe una función que determine si dos palabras son anagramas.
Un anagrama es una palabra formada reorganizando las letras de otra.
Ignora mayúsculas, espacios y tildes.

"amor" y "roma" → true  
"Escucha" y "Hacseu" → true  
"Hola" y "Halo" → true  
"Casa" y "Saco" → true  
"Perro" y "Gato" → false
*/

const IsAnagram = (word1, word2) => {
    let lowerCase1 = word1.toLowerCase();
    let lowerCase2 = word2.toLowerCase();

    if (lowerCase1.length !== lowerCase2.length) return false; 
    
    const wordLetter = {};

    for (let letter of lowerCase1) {
        wordLetter[letter] = (wordLetter[letter] || 0) + 1;
    }

    for (let letter of lowerCase2) {
        if (wordLetter[letter]) {
            wordLetter[letter] -=1;
        } else {
            return false
        }
    }
    return true
};

console.log(IsAnagram('amor', 'roma'));
console.log(IsAnagram('audifono', 'botilito'));
console.log(IsAnagram('Ana', 'Ana'));
console.log(IsAnagram('Halo', 'Hola'));
console.log(IsAnagram('raton', 'silla'));

