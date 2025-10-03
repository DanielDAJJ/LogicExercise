class Entithy {
    constructor(nombre, vida, vidaMax, ataque, denfesa){
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMax = vidaMax;
        this.ataque = ataque;
        this.defensa = denfesa;
    }
    atacar(objetivo) {
        let chance = Math.random();
        let dano = this.ataque - objetivo.defensa;
        let resultado = "";

        if (chance < 0.15) {
            dano = 0;
            resultado = `${this.nombre} intenta atacar a ${objetivo.nombre} pero falla al atacar`;
        } else if (chance > 0.85) {
            dano = (dano < 0 ? 0 : dano) * 2;
            objetivo.recibirDano(dano);
            resultado = `${this.nombre} lanza un GOLPE CRITICO contra ${objetivo.nombre} haciendo ${dano} puntos de daño`;
        } else {
            dano = dano < 0 ? 0 : dano;
            objetivo.recibirDano(dano);
            resultado = `${this.nombre} ataca a ${objetivo.nombre} y le hace ${dano} puntos de dano`;
        }
        return resultado
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

const Jugador = new Entithy('Jugador', 100, 100, 20, 10);
const Enemigo = new Entithy('Goblin', 80, 80, 15, 5);

const combatir = (ent1, ent2) => {
    let turno = 1;
    while (ent1.estaVivo() && ent2.estaVivo()) {
        console.log(`\n--- Turno ${turno} ---`);
        console.log(ent1.atacar(ent2));
        if (!ent2.estaVivo()) break;
        console.log(ent2.atacar(ent1));
        turno += 1;
    }
    if (ent1.estaVivo()) {
        console.log(`\n ${ent1.nombre} gana el combate!`)
    } else {
        console.log(`\n ${ent2.nombre} gana el combate!`)
    }
};

combatir(Jugador, Enemigo);