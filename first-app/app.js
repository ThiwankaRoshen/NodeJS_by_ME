//const EventEmitter = require('events')
// const emitter = new EventEmitter()

// emitter.on('messageLogged', function(){
//     console.log('Listener called')
// })

// emitter.emit('messageLogged')
 
/////////////////

// emitter.on('messageLogged', function(arg){
//     console.log('Listener called',arg)
//  })
const Logger = require('./logger')
const logger = new Logger();
                            //arrow notation 
logger.on('messageLogged', (arg)=>{
    console.log('Listener called',arg)
})


logger.log('Trix')