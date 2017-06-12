const express = require('express');

const routes = (Book) => {
    var bookRouter = express.Router();

    bookRouter.route("/")
        .post((req, res) => {
            var book = new Book(req.body);
            book.save();
            // 201 - Created Status
            res.status(201).send(book);
        })
        .get((req, res) => {
            var query = req.query;
            var query = {};
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, function(err, books) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(books);
                }
            });
        });

    // Middleware
    bookRouter.use('/:bookId', (req, res, next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else if (book) {
                req.book = book;
                next()
            } else {
                res.status(404).send('No book found');
            }
        });
    });

    bookRouter.route("/:bookId")
        .get((req, res) => {
            res.json(req.book);
        })
        .put((req, res) => {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            req.book.save(err => err ?
                res.status(500).send(err) :
                res.json(req.book)
            );
        })
        .patch((req, res) => {
            if (req.body._id) {
                delete req.body._id;
            }
            for (var param in req.body) {
                req.book[param] = req.body[param];
            }
            req.book.save(err => err ?
                res.status(500).send(err) :
                res.json(req.book)
            );
        });

    return bookRouter;
};

module.exports = routes;