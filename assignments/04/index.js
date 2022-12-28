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
