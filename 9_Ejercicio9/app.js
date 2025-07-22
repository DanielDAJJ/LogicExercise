/* 
Dado un array de palabras, crea una función que agrupe las palabras en un objeto cuyas claves sean las longitudes de las palabras, y los valores sean arrays con palabras que tienen esa longitud.


groupWordsByLength(palabras);

Resultado esperado:
{
    3: ["sol", "luz"],
    4: ["gato"],
    5: ["perro", "ratón"],
    10: ["computador"]
    }
    */
const palabras = ["perro", "sol", "luz", "computador", "gato", "ratón"];

const GroupWordsByLength = (arr) => {
    const words = {};
    /*
    arr.forEach(word => {
        if(words[word.length]){
            words[word.length].push(word);
        } else {
            words[word.length] = word.length = [];
            words[word.length].push(word);
        } */
       //*version mejorada

    arr.forEach(word => {
        const len = word.length;

        if(words[len]){
            words[len].push(word);
        } else {
            words[len] = [word];
        }
    });
    
    return words
};

console.log(GroupWordsByLength(palabras));
