const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('printWord', (word) => {
  console.log('A palavra é ' + word)
})

eventEmitter.emit('printWord', 'Toni')
