//Globals contains the Rdio object and other global stuff.
var globals = require('./globals.js');

exports.requestHandler = function (request, response) {
  var statusCode = 200;
  //I use the default headers regardless what the request is.
  var headers = globals.defaultCorsHeaders;
  headers['Content-Type'] = "text/plain";
  //The full query will be added to this string as it comes in from the client.
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
      //Seeing what type of response the client wants from the Rdio API.
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