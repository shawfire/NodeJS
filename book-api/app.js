const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// Open connnect to the bookAPI database if it exists otherwise create the database.
const db = mongoose.connect('mongodb://localhost/bookAPI');

const Book = require('./models/bookModel');

const app = express();

// Get the port number from the ENV variable PORT otherwise set it to 3000
var port = process.env.PORT || 3000;

// Use middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', (request, response) => {
    response.send('Welcome to my API.....');
});

// Start listening on the port
app.listen(port, () => {
    console.log('Gulp is running my app on PORT: ' + port);
});