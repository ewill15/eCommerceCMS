var http = require('http')
var Routing = require('./requestRouting.js')
var PORT = 8080

var server = http.createServer(Routing.handleRequest)
server.listen(PORT,function(){
	console.log('Server is listening on port: '+PORT)
})

module.exports = Routing.handleRequest