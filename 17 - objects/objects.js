let carro = {
  marca: String,
  modelo: String,
  ano: Number,

  carro: function(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  },

  mostraModelo: function() {
    return this.modelo
  }
}

let gol = new carro('volks', 'gol trend', 1999)

console.log(gol)

