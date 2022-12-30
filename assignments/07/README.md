# Assignment 7: Serial Requests
Make the following 20 requests serially:
* https://jsonplaceholder.typicode.com/todos/1
* https://jsonplaceholder.typicode.com/todos/2
* https://jsonplaceholder.typicode.com/todos/3
* ...
* https://jsonplaceholder.typicode.com/todos/20

Log "fetching todo `<id>`... " before each request and "done." after the request.
Example:
```
$ node index.js
fetching todo 1... done.
fetching todo 2... done.
fetching todo 3... done.
...
fetching todo 20... done.
```
Combine the responses into an array, and print as JSON:
Example:
```
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  ...
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
]
```
