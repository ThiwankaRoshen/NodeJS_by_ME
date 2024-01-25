const http = require('http')

const server = http.createServer()

//when  you go to the link localhost:300 this get connection
server.on('connection', (socket)=>{
    console.log('new connection',socket)
})
server.listen(3000)
console.log('lintening port 3000....')

