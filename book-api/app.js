var express = require('express'),
    mongoose = require('mongoose');

// Open connnect to the bookAPI database if it exists otherwise create the database.
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

// Get the port number from the ENV variable PORT otherwise set it to 3000
var port = process.env.PORT || 3000;

// Routes
var bookRouter = express.Router();

bookRouter.route("/Books")
    .get(function(request, response) {
        var responseJson = { hello: "This is my API" };
        response.json(responseJson);
    });

app.use('/api', bookRouter);

app.get('/', function(request, response) {
    response.send('Welcome to my API.....');
});

// Start listening on the port
app.listen(port, function() {
    console.log('Gulp is running my app on PORT: ' + port);
});