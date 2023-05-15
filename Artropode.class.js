
import { Animal } from "./Animal.class.js";

export class Artropode extends Animal {
    #numeroDePatas
    #antenas
    #cheiro

    constructor(nome, especie, numeroDePatas, antenas){
        super(nome, especie)        
        this.#numeroDePatas = numeroDePatas        
        this.#antenas = antenas
    }

    get antenas() {
        return this.#antenas
    }
    get cheiro() {
        return this.#cheiro
    }

    get numeroDePatas() {
        return this.#numeroDePatas
    }

    set antenas(antenas) {
        this.#antenas = antenas
    }

    set numeroDePatas(numeroDePatas) {
        this.#numeroDePatas = numeroDePatas
    }
    set cheiro(cheiro) {
        this.#cheiro = cheiro
    }

}