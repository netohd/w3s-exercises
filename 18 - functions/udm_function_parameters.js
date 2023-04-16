// A function no javascript permite o envio de argumentos
// sem que a função tenha parametros, e vice-versa

function mostraTexto(a, b, c) {
  console.log(a, b, c)
}
mostraTexto() // saida: undefined undefined undefined

function mostraNada() {
  console.log('Nada xD')
}
let a, b, c
mostraNada(a, b, c)

// Através da palavra arguments é possível obter todos
// os valores que são passados para função (apenas no
// cenário onde se define escrevendo function, não é
// possível em arrow function por exemplo)

function mostraArgs() {
  console.log(arguments)
}
mostraArgs('T','E','S','T')

// Forma mais inteligente de pegar argumentos é com rest
// operator. Obs: apesar de rest ser igual ao spread (...)
// REST: condensa (usado somente em função) -> transforma os
// argumentos em um vetor
// SPREAD: espalha (usado em chamada de função e vetores) ->
// transforma o vetor em elementos, separa

function recebeArgs(...args) {
  console.log(args)
}
recebeArgs('O','I')