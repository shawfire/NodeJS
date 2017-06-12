[What is REST? Slightly confused](https://stackoverflow.com/questions/4663927/what-is-rest-slightly-confused)

REST stands for REpresentational State Transfer

[Architectural Styles and
the Design of Network-based Software Architectures by Roy Thomas Fielding 2000](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)


[What is difference between REST and API?](https://stackoverflow.com/questions/41189842/what-is-difference-between-rest-and-api)

REST - a mapping between HTTP routes and CRUD

CRUD - Create, Read, Update and Destroy

RESTful Routes
| Name    | Path   | HTTP Verb | Purpose |
|---------|--------|-----------|---------|
| Index   | /posts | GET | Show new post form |
| New     | /posts/new  | GET | Show new post form |
| Create  | /posts | POST | Create a new post, then redirect somethere |
| Show    | /posts/:id | GET | Show info about one specific post |
| Edit    | /posts/:id/edit | GET | Show edit form for one post |
| Update  | /posts/:id | PUT | Update a particular post, then redirect somewhere |
| Destroy | /posts/:id | DELETE | Delete a particular dog, then redirect somewhere |
------------------------------------------

```
yarn init

```
