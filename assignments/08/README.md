# Assignment 8: Chunking Requests
Make the following 50 requests, 5 requests at a time (in parallel):
* https://jsonplaceholder.typicode.com/todos/1
* https://jsonplaceholder.typicode.com/todos/2
* https://jsonplaceholder.typicode.com/todos/3
* ...
* https://jsonplaceholder.typicode.com/todos/50

Log "fetching todo `<id>-<id>`... " before each batch and " - fetched `<id>`" after each request completes.
Example:
```
$ node index.js
fetching todos 1-5...
 - fetched 4
 - fetched 1
 - fetched 5
 - fetched 2
 - fetched 3
fetching todos 6-10...
 - fetched 7
 - fetched 6
 - fetched 8
 - fetched 10
 - fetched 9
...
fetching todos 46-50...
 - fetched 47
 - fetched 48
 - fetched 46
 - fetched 50
 - fetched 49
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
    "id": 50,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
]
```
