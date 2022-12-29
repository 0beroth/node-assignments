#!/usr/bin/env node
const { spawn } = require('child_process');

const argument = process.argv[2];
const options = process.argv.slice(3);
const command = spawn(argument, options);

command.stdout.on('data', (data) => {
	console.log(`${data}`); // why `` work
});

command.on('error', () => {
	console.log(`/bin/sh: line 1: ${argument}: command not found`);
});

command.on('exit', () => {
	console.log('command finished successfully');
});
