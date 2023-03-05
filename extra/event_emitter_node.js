const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// O método on define um trigger para ser acionado
// definindo a string que o invoca no primeiro parâmetro
// e no segundo parâmetro é definida uma função callback
// que pode receber argumentos
eventEmitter.on('printWord', (word) => {
  console.log('A palavra informada é ' + word)
})

// Já no método emit, o primeiro parâmetro corresponde
// a string definida para chamar o trigger e o restante
// são parâmetros que podem ser passados para a função
// callback
eventEmitter.emit('printWord', 'Toni')
