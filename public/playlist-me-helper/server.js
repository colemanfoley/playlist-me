var http = require("http");

var requestHandler = require('./request-handler.js');
var globals = require('./globals.js');

var server = http.createServer(requestHandler.requestHandler);
server.listen(globals.port, globals.ip);