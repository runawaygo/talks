connect = require('connect')
connect().listen(2046).use('/', connect.static(__dirname + '/'))

console.log 'server running at port:2046'