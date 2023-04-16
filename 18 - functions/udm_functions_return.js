// É possível retornar praticamente qualquer tipo de
// info através de uma função, inclusive uma outra função
function calculadora(operador) {
  function executa(a, b) {
    switch(operador) {
      case 'sum': return a + b
      case 'sub': return a - b
      case 'div': return a / b
      case 'mul': return a * b
      default: return 'Operação inválida'
    }
  }
  return executa
}

// Ponto principal aqui: quando retornamos uma função
// na vairável, é armazenado também o valor que foi
// passado como argumento na mesma quando definida
let calculaSoma = calculadora('sum')
console.log(calculaSoma(5, 4))
//console.log(calculaSoma)