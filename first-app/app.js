const fs = require('fs')

var files = fs.readdirSync('./')

console.log(`files ${files}`)

fs.readdir('./', function(err, files){
    if (err){console.log('ERROR', err)}
    else{console.log(files)}
})