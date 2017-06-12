const HttpStatus = require('http-status-codes');

const should = require('should'),
    sinon = require('sinon');

describe('Book Controller Tests:', () => {
    describe('Post', () => {
        it('should not allow an empty title on post', () => {
            // Mock book object.
            var Book = function(book) { this.save = function() {} };
            var req = {
                body: {
                    author: 'John Smith'
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var bookController = require('../controllers/bookController')(Book);

            bookController.post(req, res);

            res.status.calledWith(HttpStatus.BAD_REQUEST).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);
        })
    });
});