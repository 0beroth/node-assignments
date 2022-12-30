#!/usr/bin/env node
const _ = require('lodash');
const axios = require('axios');

const responseArray = [];

const getTodo = async (id) => _.get(await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`), 'data', console.log(`- fetched ${id}`));

(async () => {
	try {
		for (let i = 1; i < 51; i += 5) {
			console.log(`fetching todos ${i}-${i + 4}...`);
			const output = await Promise.all(_.map(_.range(i, i + 5), getTodo));
			responseArray.push(...output);
		}
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	} finally {
		console.log(JSON.stringify(responseArray, null, 2));
	}
})();

// (async () => {
// 	try {
//         for (let i = 1; i < 51; i += 5) {

//             const API_1 = `https://jsonplaceholder.typicode.com/todos/${i}`;
//             const API_2 = `https://jsonplaceholder.typicode.com/todos/${i + 1}`;
//             const API_3 = `https://jsonplaceholder.typicode.com/todos/${i + 2}`;
//             const API_4 = `https://jsonplaceholder.typicode.com/todos/${i + 3}`;
//             const API_5 = `https://jsonplaceholder.typicode.com/todos/${i + 4}`;

//             await Promise.all([axios.get(API_1).then(console.log("hi")),
//                 axios.get(API_2),
//                 axios.get(API_3),
//                 axios.get(API_4),
//                 axios.get(API_5),
//             ])
//                 .then((responses) => {
//                     console.log(`fetching todos ${i}-${i+4}`);
//                     responses.forEach((response) => {
//                         responseArray.push(response.data);
//                         console.log(`fetched ${response.data.id}`)
//                     });
//                 })
//         }
// 	} catch (err) {
// 		console.error(`Error: ${err.message}`);
// 		process.exit(1);
// 	} finally {
// 		// console.log(JSON.stringify(responseArray, null, 2));
// 	}
// })();

