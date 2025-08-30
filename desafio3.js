class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  tipe() {
    if (this.tipo == 'mago') {
      return 'magia';
    } else if (this.tipo === 'guerreiro') {
      return 'espada';
    } else if (this.tipo === 'monge') {
      return 'artes marciais';
    } else if (this.tipo === 'ninja') {
      return 'shuriken';
    } else {
      return 'ataque indefinido';
    }
  }

  ataque() {
    const atk = this.tipe();
    console.log(`O ${this.tipo} atacou usando ${atk}`);
  }
}

let personagem = new hero('Arthur', 21, 'mago');

personagem.ataque();
