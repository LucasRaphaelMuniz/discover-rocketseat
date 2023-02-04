const { EventEmitter } = require('events')

const ev = new EventEmitter()
// once uma unica vez, on todas vezes
ev.on('SaySomething', (message) => {
  console.log('Eu ouvi você', message)
})

ev.emit('SaySomething', "Lucas")
ev.emit('SaySomething', "Lucas")


