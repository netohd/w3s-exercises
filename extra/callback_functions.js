function recebeOutraFunction(callbackSoma) {
  let a = 10, b = 9
  callbackSoma(a, b)
}

// A função callbackSoma é passada como argumento e chamada
// dentro da outra função que a recebe, já com os valores
recebeOutraFunction(function callbackSoma(x, y) {
  soma = x + y
  console.log("A soma é " + soma)
})