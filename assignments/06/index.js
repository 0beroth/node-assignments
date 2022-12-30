#!/usr/bin/env node  
// ^ allows to run script as ./index.js
const { spawn } = require('child_process');

const cmd = process.argv.slice(2).join(' ');
const child = spawn(cmd, { shell: true, stdio: 'inherit' }); //https://nodejs.org/api/child_process.html#optionsstdio stdio: 'inherit' takes care of child.stdout.on/child.stderr.on

// child.stdout.on('data', (data) => {
// 	process.stdout.write(data);
// });

// child.stderr.on('data', (data) => {
// 	process.stderr.write(data);
// });

child.on('exit', (code) => {
	if (code === 0) {
		console.log('\ncommand finished successfully');
	} else {
		console.log('\ncommand finished unsuccessfully');
	}
});
