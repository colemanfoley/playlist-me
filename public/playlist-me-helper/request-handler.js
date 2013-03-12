var globals = require('./globals.js');

exports.requestHandler = function (request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);
  var statusCode = 200;
  var headers = globals.defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";

  var fullQuery = "";
  if (request.method === "OPTIONS") {
    response.writeHead(statusCode, headers);
    response.end();
  }
  else {
    request.on('data', function(chunk) {
      fullQuery += chunk.toString();
    });

    response.writeHead(statusCode, headers);

    request.on('end', function (argument) {
      globals.r.makeRequest('search', {query: fullQuery, types: 'Track'}, function() {
        response.end(JSON.stringify(arguments[1].result.results[0]));
      });
    });
  };
};