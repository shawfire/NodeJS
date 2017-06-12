## Building a RESTful API with Node and Express
The term REST (REpresentational State Transfer) is first coined and defined in a disertation writing by Roy Fielding in 2000
[Architectural Styles and
the Design of Network-based Software Architectures by Roy Thomas Fielding 2000](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
Client <- Client Request / Server Response -> Server*n
Caching how long 
Uniform interface. Uniform from one service to the next.
1. Resources (nowns)
  e.g. books (http://.../Book/) and authors (http://.../Author/)
2. Verbs the type of activity we are trying to perform on the Resource.
  e.g. 
  1. Get will request data
  2. Post is to add data
  3. Delete will remove
  4. Put is used to update
  5. Patch updating a piece of a resource
3. Acronym HATEOS -> Hypermedia as the Engine of Application State - A series of hyperlinks to navigate the API.

```
mkdir book-api
cd !$
yarn init
yarn add express --save
node app.js
http://localhost:3000
yarn add gulp --save
yarn add gulp global
yarn add gulp-nodemon --save
```

## Implement the HTTP Get verb to get items
Add Chrome extension "JSON Formater"
  Chrome -> Preferences -> Extensions -> Get more extensions ...
mongodb.org
```
yarn add mongoose --save
mongod
gulp
```
mongoose - like an entity framework (.Net)/ Active record (Rails) / Hybernate (JEE) ORM (Object relational mapper)

[Insert Data with the mongo Shell](https://docs.mongodb.com/getting-started/shell/insert/)
mongo
use bookAPI
db.books.insert({title: "War and Peace", genre: "Historical Fiction", author: "Lev Nikolayevich Tolstoy", read: false})
db.books.insert({title: "Les Misérables", genre: "Historical Fiction", author: "Victor Hugo", read: false})
db.books.insert({title: "The Time Machine", genre: "Science Fiction", author: "H. G. Wells", read: false})
db.books.insert({title: "A Journey into the Center of the Earth", genre: "Science Fiction", author: "Jules Verne", read: false})
db.books.insert({title: "The Dark World", genre: "Fantasy", author: "Henry Kuttner", read: false})

http://localhost:8000/api/Books
http://localhost:8000/api/Book?genre=Fiction
  request.query = { genre: 'Fiction' }

http://localhost:8000/api/Books?genre=Science%20Fiction

http://localhost:8000/api/Books/593ded973615ba6f0c53f8f3

## Implement the HTTP Post verb to insert a new item
Test with Chrome extension Postman
Read the book and parse into a JSON object we can understand using body-parser.

yarn add body-parser

yarn help add

Postman
1. GET - localhost:8000 
2. GET - localhost:8000/api/Books
3. GET - localhost:8000/api/Books/593ded973615ba6f0c53f8f3
3. POST - localhost:8000/api/Books/
  Header 
  - Key: Content-Type
  - Value: application/json
  - Body: {
"title": "Bread upon the waters",
"genre": "Fiction",
"author": "Irwin Shaw",
"read": false
}
Send
Check gulp/Node console...

## Implement the Put verb to update an existing item
Postman
3. GET - localhost:8000/api/Books/
3. PUT - localhost:8000/api/Books/593e23247e182e6377bc9648
  Header 
  - Key: Content-Type
  - Value: application/json
  - Body: {
  "_id": "593e23247e182e6377bc9648"
}
4. PUT - localhost:8000/api/Books/593e23247e182e6377bc9648
{
	"title": "Bread Upon The Waters Three",
	"genre": "Non Fiction",
	"author": "Irwin Shaw"
}

## Implement the Patch verb to update an existing item with Middleware
Postman
1. PATCH - localhost:8000/api/Books/593e23247e182e6377bc9648
{
	"read": true
}

## Implement Delete verb and use http-status-codes to avoid use of hard coded numbers
Postman
1. DELETE - localhost:8000/api/Books/593e23247e182e6377bc9648
2. GET - localhost:8000/api/Books/593e23247e182e6377bc9648
  book not found

[http-status-codes](https://www.npmjs.com/package/http-status-codes)
yarn add http-status-codes

## Refactor to use controllers and Unit testing with mocha and Sinon
yarn add gulp-mocha should sinon

## Integration tests with supertest and gulp-env
yarn add supertest gulp-env --dev

[Plurasight RESTful Web Services with NodeJS by Jonathan Mills](https://app.pluralsight.com/player?course=node-js-express-rest-web-services&author=jonathan-mills&name=node-js-express-rest-web-services-m4&clip=1)

