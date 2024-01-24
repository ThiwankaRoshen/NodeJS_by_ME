const EventEmitter = require('events')
const emitter = new EventEmitter()

// emitter.on('messageLogged', function(){
//     console.log('Listener called')
// })

// emitter.emit('messageLogged')

emitter.on('messageLogged', function(arg){
    console.log('Listener called',arg)
})

emitter.emit('messageLogged', {id:1, url:'http//'})