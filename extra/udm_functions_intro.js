// Existem várias formas de declarar funções
// As funções podem ser passadas como parâmetro
// Funções são first class objects

function tipoClassico () {
  fazAlgumaCoisa = 'Olá pessoal'
  console.log(fazAlgumaCoisa)
  return fazAlgumaCoisa
}

const comoVariavel = function () {
  a = 10; b = 5
  let soma = a + b
  return soma
}

console.log(comoVariavel())

const funcaoArrow = () => {
  console.log('Sou uma arrow function')
}

// Função dentro de objeto
const carro = {
  cor: 'amarelo',
  marca: 'Volks',
  mostraMarca() {
    console.log(this.marca)
  }
}

carro.mostraMarca()