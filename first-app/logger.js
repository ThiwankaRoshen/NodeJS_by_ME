const EventEmitter = require('events')
// const emitter = new EventEmitter()

var url = 'https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html'

class Logger extends EventEmitter{    
    log(message){
        console.log(message)
        this.emit('messageLogged', {id:1, url:'http//'})
    }
}

module.exports =Logger
