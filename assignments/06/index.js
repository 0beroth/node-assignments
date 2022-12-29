#!/usr/bin/env node
const { spawn } = require('child_process');

const cmd = process.argv.slice(2).join(' ');
const command = spawn(cmd, { shell: true });

command.stdout.on('data', (data) => {
	process.stdout.write(data);
});

command.stderr.on('data', (data) => {
	process.stderr.write(data);
});

command.on('exit', (code) => {
	if (code === 0) {
		console.log('\ncommand finished successfully');
	} else {
		console.log('\ncommand finished unsuccessfully');
	}
});
