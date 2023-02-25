var numeros = []

for (let i = 0; i < 10; i++) {
  let numero = Math.random() * 100;
  numeros.push(Math.floor(numero))
  //console.log(numero)
}
// retorna NaN, argumentos devem ser pares de valores
console.log(Math.max(numeros))
console.log(numeros)