const os = require('os')

var totalMem = os.totalmem()
var freeMem = os.freemem()

console.log(`total mem ${totalMem} free mem ${freeMem}`)