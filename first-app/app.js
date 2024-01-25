const EventEmitter = require('events')
const emitter = new EventEmitter()

// emitter.on('messageLogged', function(){
//     console.log('Listener called')
// })

// emitter.emit('messageLogged')
 
/////////////////

// emitter.on('messageLogged', function(arg){
//     console.log('Listener called',arg)
//  })
                           //arrow notation 
emitter.on('messageLogged', (arg)=>{
    console.log('Listener called',arg)
})

const log = require('./logger')
log('Trix')