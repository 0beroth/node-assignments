#!/usr/bin/env node
const { spawn } = require('child_process');

const argument = process.argv[2];
const options = process.argv.slice(3);
const command = spawn(argument, options);

command.stdout.on('data', (data) => {
	const finalData = data.toString().trim();
	console.log(finalData);
	// console.log(`${data}`); // why `` work
});

command.on('error', (error) => {
	console.error(`stderr: ${error}`);
});

command.on('exit', () => {
	console.log('\ncommand finished successfully');
});
