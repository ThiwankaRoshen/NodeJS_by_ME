const EventEmitter = require('events')
const emitter = new EventEmitter()

var url = 'https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html'


function log(message){
    console.log(message)
    emitter.emit('messageLogged', {id:1, url:'http//'})
}

module.exports =log
