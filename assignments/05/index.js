#!/usr/bin/env node
const axios = require('axios');

const API_1 = 'https://jsonplaceholder.typicode.com/todos/1';
const API_2 = 'https://jsonplaceholder.typicode.com/todos/2';
const API_3 = 'https://jsonplaceholder.typicode.com/todos/3';
const API_4 = 'https://jsonplaceholder.typicode.com/todos/4';
const API_5 = 'https://jsonplaceholder.typicode.com/todos/5';

Promise.all([axios.get(API_1),
	axios.get(API_2),
	axios.get(API_3),
	axios.get(API_4),
	axios.get(API_5),
])
	.then((responses) => {
		const resArray = [];
		responses.forEach((response) => {
			resArray.push(response.data);
		});
		console.log(JSON.stringify(resArray, null, 2));
	});
