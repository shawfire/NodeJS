# NodeJS

## Setup
```
Make new Github Repository called NodeJS.
mkdir ~/projects/NodeJS
cd ~/projects/NodeJS
559  git config --global user.name
560  git config --global user.email
561  git config --global user.email "shaw_fire@yahoo.com"
567  echo "# NodeJS" >> README.md
568  git init
569  git add README.md
570  git commit -m "first commit"
571  git remote add origin https://github.com/shawfire/NodeJS.git
572  git push -u origin master
573  history
```

# MongoDB
```
mongo --version
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
sudo mkdir -p /data/db
sudo chmod 777 /data/db
mongod
```

mkdir express-api
cd !$
yarn init

ruby.yaml
yaml format...
#loop, for i in 

prog-lang-api
url?lang=ruby|js|python|c#&tag=[loop|map|select|filter]&vs=js|ruby|python

[A TDD Approach to Building a Todo API Using Node.js and MongoDB](https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb)

[yarn install](https://yarnpkg.com/lang/en/docs/cli/install/)
[yarn add](https://yarnpkg.com/en/docs/cli/add)

yarn add  <package-name> --dev

https://www.codementor.io/linux/tutorial/configure-linux-toolset-zsh-tmux-vim

https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one
https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-two
https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-three
https://github.com/akabiru/todos-api.git

https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb
https://github.com/rajzshkr/todoapi
http://apitodo.herokuapp.com/api/todos

https://www.codementor.io/gerardsans/building-handsup-an-os-real-time-voting-app-using-graphql-and-react-85gnbclh5
https://github.com/gsans/handsup-react

https://www.omdbapi.com/?s=star
http://www.omdbapi.com/apikey.aspx
1z2d7a7aeczt

https://medium.com/@kentcdodds/classes-complexity-and-functional-programming-a8dd86903747
https://medium.com/@vicalfieri/boot-camp-fast-track-rabbit-hole-red-pill-df79d9f14a15


http://img.omdbapi.com/?i=tt3896198&h=600&apikey=2d7a7aec

https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
https://github.com/generalgmt/RESTfulAPITutorial

http://reduxblog.herokuapp.com/
http://reduxblog.herokuapp.com/api/posts?key=shawfire
https://github.com/rajaraodv/react-redux-blog
https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a

donloads/github/ruby...peopl.csv also in postman

## Building a RESTful API with Node and Express ***** book-api *****
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
```
