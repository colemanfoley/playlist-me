//I make calls on this object whenever I need to get something from Rdio.
var Rdio = require('rdio-node').Rdio;
exports.r = new Rdio({
  consumerKey: 'ar4rzrs9vetnf8gq5rmw4avb'
, consumerSecret: 'PZ5QyvM3A2'
});


exports.defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

exports.port = 8080;
exports.ip = "127.0.0.1";