#!/usr/bin/env node
const axios = require('axios');

const responseArray = [];

(async () => {
	try {
		for (let i = 1; i < 21; i += 1) {
			process.stdout.write(`fetching todo ${i}...`);
			const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`);
			responseArray.push(response.data);
			console.log(' done.');
		}
	} catch (err) {
		console.error(`Error: ${err.message}`);
		process.exit(1);
	} finally {
		console.log(JSON.stringify(responseArray, null, 2));
	}
})();

// const  serialApiCall = () => {

//     for (let i = 1; i < 21; i += 1) {
//         const API = `https://jsonplaceholder.typicode.com/todos/${i}`;

//         axios.get(API)
//         .then((response) => {
//             process.stdout.write(`fetching todo ${i}`);
//             responseArray.push(response.data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//         .finally(() => {
//             console.log(" done");
//         });
//     };
// }

// serialApiCall();
