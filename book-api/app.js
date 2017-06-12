var express = require('express');

var app = express();

// Get the port number from the ENV variable PORT otherwise set it to 3000
var port = process.env.PORT || 3000;

// Route
app.get('/', function(request, response) {
    response.send('Welcome to my API.....');
});

// Start listening on the port
app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});