# Tasty Bytes

A single page application for posting and sharing short tech blog posts.

Deployed on [Heroku](https://www.heroku.com/), live version [here](https://tastybytes.herokuapp.com/).

## Frontend Built With:
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Redux](https://redux.js.org/)
- [Axios](https://github.com/axios/axios)

## Backend Built With:
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Website uses REST API routes and page navigation is handled with [React Router](https://reactrouter.com/).

## REST Routes

| URL              | verb      | functionality                        |
| :--------------: | :-------- | :----------------------------------- |
|  /api/blogs      | GET       | fetch all blogs                      |
|  /api/blogs/:id  | GET       | fetch a single blog                  |
|  /api/blogs      | POST      | create a blog                        |
|  /api/blogs/:id  | PUT       | update a blog                        |
|  /api/blogs/:id  | DELETE    | delete a blog                        |
|  /api/comments   | GET       | fetch all comments                   |
|  /api/comments   | POST      | create a comment                     |
|  /api/users      | GET       | fetch all users                      |
|  /api/users/:id  | GET       | fetch a single user                  |
|  /api/users      | POST      | create a user                        |
|  /api/login      | POST      | log in a user                        |