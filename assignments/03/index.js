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
		if (!response.data.items) {
			console.log('Your search parameter returns 0 results');
			return;
		}

		const result = [];
		const resLength = response.data.items.length;
		let resultLength = 5;

		// In case user inputs argument that results less than 5 desired results
		switch (resLength) {
		case resLength === 4: resultLength = 4;
			break;
		case resLength === 3: resultLength = 3;
			break;
		case resLength === 2: resultLength = 2;
			break;
		case resLength === 1: resultLength = 1;
			break;
		case resLength === undefined: console.log('no');
			break;
		default:
		}

		for (let i = 0; i < resultLength; i += 1) {
			const title = Object.fromEntries(Object.entries(response.data.items[i]).filter(([key]) => key.includes('title')));
			const link = Object.fromEntries(Object.entries(response.data.items[i]).filter(([key]) => key.includes('link')));
			const snippet = Object.fromEntries(Object.entries(response.data.items[i]).filter(([key]) => key.includes('snippet')));
			const all = { ...title, ...link, ...snippet };
			result.push(all);
		}
		console.log(JSON.stringify(result, null, 2));
	})
	.catch((error) => {
		console.log(error);
	});
