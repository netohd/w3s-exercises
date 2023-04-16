// Criando objeto com a factory (não tem new, diferente da constructor)
function criaCarro(marca, modelo, ano) {
  return {
    marca,
    modelo,
    ano,
    mudaCarro(marca, modelo, ano) {
      this.marca = marca
      this.modelo = modelo
      this.ano = ano
    },
    mostraInfo() {
      return `Este carro é o ${this.modelo} da marca ${this.marca}`
    }
  }
}

let gol = criaCarro('volks', 'gol trend', 1999)
console.log(gol.mostraInfo())

let golLiteral = {
  marca: 'volks',
  modelo: 'gol trend',
  ano: 1999,
  mudaAno(novoAno) {
    this.ano = novoAno
  }
}
golLiteral.mudaAno(1995)
console.log(golLiteral)

// Também é possível acessar as chaves dos objetos com [] ao invés de .
console.log(gol['marca'])

for (let chave in gol) {
  console.log(chave)
}