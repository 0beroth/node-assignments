#!/usr/bin/env node

const axios = require('axios');

const API = 'https://jsonplaceholder.typicode.com/posts';

axios.get(API)
	.then((response) => {
		const res = response.data.slice(0, 5);
		console.log(JSON.stringify(res, null, 2));
	})
	.catch((error) => {
		console.log(error);
	});

// const https = require('https');

// const API = 'https://jsonplaceholder.typicode.com/posts';

// https.get(API, (res) => {
//     let data = '';

//   res.on('data', (d) => {
//     data += d.toString();
//   });
//   res.on('end', (d) => {
//     const parsedJSON = JSON.parse(data);
//     console.log(parsedJSON.slice(0,5));
//   });

// }).on('error', (e) => {
//   console.error(e);
// });

// const request = require('request');

// request('https://jsonplaceholder.typicode.com/posts', { json: true } , (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body);
// //   console.log(body.explanation);
// });

// #!/usr/bin/env node
// const _ = require('lodash');
// const axios = require('axios');

// This is an IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE :

// (async () => {
//     try {
//         const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         const output = _.take(resp.data, 5);
//         console.log(JSON.stringify(output, null, 2));
//     } catch (err) {
//         console.error(`Error: ${err.message}`);
//         process.exit(1);
//     }
// })();
