const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// O método on define um trigger para ser acionado
// definindo a string que o invoca no primeiro parâmetro
// e no segundo parâmetro é definida uma função callback
// que pode receber argumentos
eventEmitter.on('printWord', (word) => {
  console.log('A palavra é ' + word)
})


eventEmitter.emit('printWord', 'Toni')
