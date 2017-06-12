var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// Open connnect to the bookAPI database if it exists otherwise create the database.
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

// Get the port number from the ENV variable PORT otherwise set it to 3000
var port = process.env.PORT || 3000;

// Use middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
var bookRouter = express.Router();

bookRouter.route("/Books")
    .post((request, response) => {
        var book = new Book(request.body);
        console.log(book);
        response.send(book);
    })
    .get((request, response) => {
        var query = request.query;
        var query = {};
        if (request.query.genre) {
            query.genre = request.query.genre;
        }
        Book.find(query, function(err, books) {
            if (err) {
                response.status(500).send(err);
            } else {
                response.json(books);
            }
        });
    });

bookRouter.route("/Books/:bookId")
    .get((request, response) => {
        Book.findById(request.params.bookId, (err, book) => {
            if (err) {
                response.status(500).send(err);
            } else {
                response.json(book);
            }
        });
    });

app.use('/api', bookRouter);

app.get('/', (request, response) => {
    response.send('Welcome to my API.....');
});

// Start listening on the port
app.listen(port, () => {
    console.log('Gulp is running my app on PORT: ' + port);
});