/* 
*Ejercicio básico:

Crea una clase Persona con las siguientes características:

La clase debe tener:

un constructor que reciba nombre y edad.

un método presentarse() que devuelva un string:
"Hola, mi nombre es X y tengo Y años."

Crea al menos 2 instancias de la clase (ejemplo: Ana y Luis).

Llama al método presentarse() de cada instancia y muestra el resultado en consola.
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad
    }

    Presentarse(){
        return console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const ana = new Persona('Ana', 25);
const luis = new Persona('Luis', 30);

ana.Presentarse();
luis.Presentarse();

/* 
*Ejercicio:

Crea una clase CuentaBancaria con las siguientes características:

Propiedades:

titular (nombre del dueño)

saldo (empieza en 0 por defecto)

Métodos:

depositar(monto): aumenta el saldo en la cantidad indicada.

retirar(monto): disminuye el saldo si hay suficiente dinero, de lo contrario muestra un mensaje de error.

consultarSaldo(): devuelve el saldo actual.
*/

class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = !saldo ? 0 : saldo;
    }
    depositar (monto) {
        return this.saldo += monto;
    }
    retirar (monto) {
        return this.saldo !== 0 ? this.saldo -= monto : this.saldo = 0;  
    }
    consultarSaldo() {
        return this.saldo;
    }
}

const newAccountAnna = new CuentaBancaria (ana.nombre);
const newAccountLuis = new CuentaBancaria (luis.nombre, 100);

console.log(newAccountAnna.consultarSaldo());
console.log(newAccountLuis.consultarSaldo());
console.log(newAccountLuis.titular);
console.log(newAccountAnna.titular);
console.log(newAccountAnna.depositar(250));
console.log(newAccountLuis.retirar(50));
console.log(newAccountAnna.consultarSaldo());
console.log(newAccountLuis.consultarSaldo());
