class entithy {
    constructor(nombre, vida, vidaMax, ataque, denfesa){
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.ataque = ataque;
        this.defensa = denfesa;
    }
    atacar(objetivo) {
        let dano = this.ataque - objetivo.defensa;
        dano < 0 ? dano = 0 : dano;
        objetivo.recibirDano(dano);
        return `${this.nombre} ataca a ${objetivo.nombre} y le hace ${dano} puntos de dano`;
    }
    recibirDano(cantidadDano){
        this.vida -= cantidadDano;
        if (this.vida < 0) this.vida = 0;
        return `Vida de ${this.nombre}: ${this.vida}/${this.vidaMax}`;
    }
    estaVivo(){
        return this.vida > 0 ? true : false;
    }
}

const Jugador = new entithy("Jugador", 100, 100, 20, 10);
const Enemigo = new entithy("Goblin", 80, 80, 15, 5);

console.log(Jugador.atacar(Enemigo));
console.log(Enemigo.atacar(Jugador));

console.log(Jugador);
console.log(Enemigo);