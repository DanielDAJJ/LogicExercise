/* 
*Tienes un array de objetos con información de ventas. Agrupa las ventas por vendedor y calcula el total vendido por cada uno

Esto ya combina agrupación + acumulación, y es la antesala de usar P.O.O. porque ya tratamos con entidades y sus relaciones.
*/

const ventas = [
    {vendedor: "Ana", monto: 120},
    {vendedor: "Luis", monto: 300},
    {vendedor: "Ana", monto: 50},
    {vendedor: "Carlos", monto: 500},
    {vendedor: "Luis", monto: 150}
];

const vendedores = ventas.reduce((acum, vend)=>{
    !acum[vend.vendedor] ? acum[vend.vendedor] = vend.monto : acum[vend.vendedor] += vend.monto;
    return acum
}, {})

console.log(vendedores);
