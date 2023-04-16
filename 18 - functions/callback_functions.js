function recebeOutraFunction(callbackSoma, ...resto) {
  let a = 10, b = 9
  callbackSoma(a, b)
  console.log(resto)
}

// A função callbackSoma é passada como argumento e chamada
// dentro da outra função que a recebe, já com os valores
recebeOutraFunction((x, y) => {
  soma = x + y
  console.log("A soma é " + soma)
}, 'teste')