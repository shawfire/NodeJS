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

    const getBookId = (req, res) => {
        var returnBook = req.book.toJSON();

        returnBook.links = {};
        returnBook.links.FilterByThisGenre =
            `http://${req.headers.host}/api/books/?genre=${returnBook.genre}`.replace(' ', '%20');

        res.json(returnBook);
    }

    const put = (req, res) => {
        req.book.title = req.body.title;
        req.book.author = req.body.author;
        req.book.genre = req.body.genre;
        req.book.read = req.body.read;
        req.book.save(err => err ?
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err) :
            res.json(req.book)
        );
    }

    const patch = (req, res) => {
        if (req.body._id) {
            delete req.body._id;
        }
        for (var param in req.body) {
            req.book[param] = req.body[param];
        }
        req.book.save(err => err ?
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err) :
            res.json(req.book)
        );
    }

    const deleteBookId = (req, res) => {
        req.book.remove(err => err ?
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err) :
            res.status(HttpStatus.NO_CONTENT).send('Removed')
        );
    }

    const bookIdMiddleware = (req, res, next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
            } else if (book) {
                req.book = book;
                next()
            } else {
                res.status(HttpStatus.NOT_FOUND).send('No book found');
            }
        });
    }

    return {
        post: post,
        get: get,
        getBookId: getBookId,
        put: put,
        patch: patch,
        delete: deleteBookId,
        bookIdMiddleware: bookIdMiddleware
    }
}

module.exports = bookController;