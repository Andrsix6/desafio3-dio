class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque() {
    let atk;
    if (this.tipo == 'mago') {
      atk = 'magia';
    } else if (this.tipo == 'guerreiro') {
      atk = 'espada';
    } else if (this.tipo == 'monge') {
      atk = 'artes marciais';
    } else if (this.tipo == 'ninja') {
      atk = 'shuriken';
    }
    console.log(`O ${this.tipo} atacou usando ${atk}`);
  }
}

let personagem = new hero('Arthur', '21', 'mago');

personagem.ataque();
