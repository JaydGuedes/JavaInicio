export class Animal{
    #nome = ''
    #especie = ''
    #familia
    #nascimento
    #metrica = {}
    
    constructor(nome, especie){
        this.#nome = nome.trim()
        this.#especie = especie.trim()
        //document.write('Criando um bicho chamado ' + nome +'<br>')
    }

    alimentacao(){ }
    vacina(){ }

    get nome(){
        return this.#nome
    }
    set nome(nome){
        this.#nome = nome.trim()
    }
    get especie(){
        return this.#especie
    }
    set especie(especie){
        this.#especie = especie.trim()
    }
    get familia(){
        return this.#familia
    }
    set familia(familia){
        this.#familia = familia.trim()
    }
    get nascimento(){
        return this.#nascimento
    }
    set nascimento(nascimento){
        this.#nascimento = nascimento.trim()
    }
    get metrica(){
        return this.#metrica
    }
    set metrica(metrica){
        this.#metrica = metrica.trim()
    }
}