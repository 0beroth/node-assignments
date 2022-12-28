#!/usr/bin/env node
require('dotenv').config();

const axios = require('axios');

const searchParam = process.argv.slice(2).join(' '); // in case user puts multiple words without quotations (.join("") and .join(" ") returns slightly different results so unsure which one to use)

// in case user just runs 'node index.js' with no arguments
// 11:6  error  Parsing error: 'return' outside of function (Don't know how to work around this linter error)
if (!searchParam) {
    console.log("Please run the script along with your argument for search. Example: 'node index.js \"Food near me\"'");
    return;
}

const API = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=76254b22e51fd4690&q=${searchParam}`;

axios.get(API)
	.then((response) => {

		// In case user inputs argument that returns no results
		if (!response.data?.items) { // ? = safe lookup operator
			console.log('Your search parameter returns 0 results');
			return;
		}

		// const output = response.data.items.slice(0, 5).map(({title, link, snippet}) => ({title, link, snippet}));
		const output = response.data.items.slice(0, 5).map((item) => ({
			title: item.title,
			link: item.link,
			snippet: item.snippet
		}));

		// for (let i = 0; i < sliced.length; i += 1) {
		// 	const {title, link, snippet} = sliced[i];
		// 	result.push({title, link, snippet});
		// }
		console.log(JSON.stringify(output, null, 2));
	})
	.catch((error) => {
		console.log(error);
	});

	
