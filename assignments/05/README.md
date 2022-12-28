# Assignment 5: Parallel Requests
make the following 5 requests in parallel, combine the responses into an array, and print as JSON:
* https://jsonplaceholder.typicode.com/todos/1
* https://jsonplaceholder.typicode.com/todos/2
* https://jsonplaceholder.typicode.com/todos/3
* https://jsonplaceholder.typicode.com/todos/4
* https://jsonplaceholder.typicode.com/todos/5
```
Example:
$ node index.js
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
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]
