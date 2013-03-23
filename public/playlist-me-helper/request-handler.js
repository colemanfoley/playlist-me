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
  else if(request.method === "POST") {
    request.on('data', function(chunk) {
      fullQuery += chunk.toString();
    });

    response.writeHead(statusCode, headers);

    request.on('end', function (argument) {
      var parsedQuery = JSON.parse(fullQuery);

      if (parsedQuery.queryType === "play") {
        globals.r.makeRequest('search', {query: parsedQuery.key, types: 'Track'}, function() {
          response.end(JSON.stringify(arguments[1].result.results[0]));
        });
      }

      else if (parsedQuery.queryType === "search") {
        globals.r.makeRequest('search', {query: parsedQuery.key, types: 'Track'}, function() {
          response.end(JSON.stringify(arguments[1].result.results));
        });
      }
      else if (parsedQuery.queryType === "getPlaybackToken") {
        globals.r.makeRequest('getPlaybackToken', {domain: "playlist-me.meteor.com"}, function() {
          response.end(JSON.stringify(arguments));
        });
      };
    });
  };
};