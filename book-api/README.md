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

## Implement HTTP Get verb
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
db.books.insert({title: "War and Peace", genre: "Historical Fiction", authour: "Lev Nikolayevich Tolstoy", read: false})
db.books.insert({title: "Les Misérables", genre: "Historical Fiction", authour: "Victor Hugo", read: false})
db.books.insert({title: "The Time Machine", genre: "Science Fiction", authour: "H. G. Wells", read: false})
db.books.insert({title: "A Journey into the Center of the Earth", genre: "Science Fiction", authour: "Jules Verne", read: false})
db.books.insert({title: "The Dark World", genre: "Fantasy", authour: "Henry Kuttner", read: false})

http://localhost:8000/api/Books
http://localhost:8000/api/Book?genre=Fiction
  request.query = { genre: 'Fiction' }

