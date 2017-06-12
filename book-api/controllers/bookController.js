const HttpStatus = require('http-status-codes');

const bookController = (Book) => {

    const post = (req, res) => {
        var book = new Book(req.body);

        if (!req.body.title) {
            res.status(HttpStatus.BAD_REQUEST);
            res.send('Title is required');
        } else {
            book.save();
            res.status(HttpStatus.CREATED);
            res.send(book);
        }
    }

    const get = (req, res) => {
        var query = {};
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function(err, books) {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
            } else {
                res.json(books.map(book => {
                    var newBook = book.toJSON();
                    newBook.links = {};
                    newBook.links.self = `http://${req.headers.host}/api/books/${newBook._id}`;
                    return newBook;
                }));
            }
        });
    }

    return {
        post: post,
        get: get
    }
}

module.exports = bookController;