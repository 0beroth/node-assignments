#!/usr/bin/env node
require('dotenv').config();

const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: true });

let query;

while (!query) {
	query = prompt('please enter a search query: ');
}

const API = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=76254b22e51fd4690&q=${query}`;

axios.get(API)
	.then((response) => {
		if (!response.data?.items) {
			console.log('Your search parameter returns 0 results');
			return;
		}

		const output = response.data.items.slice(0, 5).map((item) => ({
			title: item.title,
			link: item.link,
			snippet: item.snippet,
		}));

		console.log(JSON.stringify(output, null, 2));
	})
	.catch((error) => {
		console.log(error);
	});

// const _ = require('lodash');
// const axios = require('axios');
// const readline = require('readline');
// const util = require('util');

// const apiKey = 'AIzaSyCtJse-Tpw-yDfqGDxatSGN2YYdfngnRRE';
// const engineId = '726d18bb93b234b1e';
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const question = util.promisify(rl.question).bind(rl);

// (async () => {
//     try {
//         const query = await question('please enter a search query: ');
//         rl.close();
//         const resp = await axios({
//             url: 'https://www.googleapis.com/customsearch/v1',
//             params: {
//                 key: apiKey,
//                 cx: engineId,
//                 q: query,
//                 num: 5,
//             },
//         });
//         const output = _.map(resp.data.items, (item) => _.pick(item, 'title', 'link', 'snippet'));
//         console.log(JSON.stringify(output, null, 2));
//     } catch (err) {
//         console.error(`Error: ${err.message}`);
//         process.exit(1);
//     }
// })();
