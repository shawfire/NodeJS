const express = require('express');
const HttpStatus = require('http-status-codes');

const routes = (Book) => {
    var bookRouter = express.Router();

    const bookController = require('../controllers/bookController')(Book)

    bookRouter.route("/")
        .post(bookController.post)
        .get(bookController.get);

    bookRouter.use('/:bookId', bookController.bookIdMiddleware);

    bookRouter.route("/:bookId")
        .get(bookController.getBookId)
        .put(bookController.put)
        .patch(bookController.patch)
        .delete(bookController.delete);

    return bookRouter;
};

module.exports = routes;