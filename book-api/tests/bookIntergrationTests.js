const HttpStatus = require('http-status-codes');

var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    agent = request.agent(app);

describe('Book Crud Test', () => {
    it('Should allow a book to be posted and return a read and _id', (done) => {
        var bookPost = { title: 'new book' }

        agent.post('/api/books')
            .send(bookPost)
            .expect(HttpStatus.OK)
            .end((err, results) => {
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done()
            })
    })

    afterEach((done) => {
        Book.remove().exec();
        done();
    })
})