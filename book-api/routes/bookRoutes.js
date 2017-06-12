const express = require('express');

const routes = (Book) => {
    var bookRouter = express.Router();

    bookRouter.route("/")
        .post((request, response) => {
            var book = new Book(request.body);
            book.save();
            // 201 - Created Status
            response.status(201).send(book);
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

    bookRouter.route("/:bookId")
        .get((request, response) => {
            Book.findById(request.params.bookId, (err, book) => {
                if (err) {
                    response.status(500).send(err);
                } else {
                    response.json(book);
                }
            });
        });

    return bookRouter;
};

module.exports = routes;