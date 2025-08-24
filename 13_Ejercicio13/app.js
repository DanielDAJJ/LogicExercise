/* 
*Desafío Avanzado: Agrupación + Cálculo combinado

Tienes un array de objetos de productos, cada uno con las propiedades categoria, nombre y precio.

Crea una función que:

Agrupe los productos por categoría.

Para cada categoría devuelva:

--Un array de los nombres de los productos

--El precio total de todos los productos dentro de esa categoría
*/

//?Input

const productos = [
    { categoria: "bebidas", nombre: "agua", precio: 2000 },
    { categoria: "alimentos", nombre: "pan", precio: 1500 },
    { categoria: "bebidas", nombre: "jugo", precio: 3500 },
    { categoria: "aseo", nombre: "jabón", precio: 5000 },
    { categoria: "alimentos", nombre: "queso", precio: 8000 },
    { categoria: "bebidas", nombre: "gaseosa", precio: 4500 }
];

//*solución
const Categorizar = (arr) => {
    let organicedProducts = {};

    arr.forEach(item => {
        let itemCategory = item.categoria;
        
        !organicedProducts[itemCategory] ? organicedProducts[itemCategory] = { nombre:[item.nombre], precio: 0} : organicedProducts[itemCategory].nombre.push(item.nombre);
        
        organicedProducts[itemCategory].precio += item.precio;
    });

    return console.log(organicedProducts);
}; 

Categorizar(productos);