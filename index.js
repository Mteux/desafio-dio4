class heroi {
    golpe = ""
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
      }

      atacar() {
        if (this.tipo == "mago") {
            this.golpe = "magia"
        } else if (this.tipo == "guerreiro") {
            this.golpe = "espada"
        } else if (this.tipo == "monge") {
            this.golpe = "artes marciais"
        } else if (this.tipo == "ninja") {
            this.golpe = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${this.golpe}`);
    }

    
}

let Heroi = new heroi("Mateus", 25, "ninja")

Heroi.atacar()