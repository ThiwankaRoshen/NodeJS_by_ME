function sayHello(name){
    console.log(`Hello ${name}`)
}

//sayHello('trX')
console.log('hey')

var logger = require('./logger')

logger('TRX')
////////////////////////////////////
//const use because for safety of mutability
const path = require('path')
var pathObj = path.parse(__filename)
console.log(pathObj)
