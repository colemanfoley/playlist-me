var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');

var app = express();

var port = 4276;

app.listen(port, function(argument) {
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});
