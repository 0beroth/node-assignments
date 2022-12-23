#!/usr/bin/env node

const os = require('os');

let system = os.platform();
const nodeVersion = process.versions.node;
const availMemory = os.freemem();

switch (system) {
case 'win32': system = 'Windows';
	break;
case 'linux': system = 'Linux';
	break;
case 'darwin': system = 'macOs';
	break;
default:
}

console.log(`Operating system: ${system}`);
console.log(`Node Version: ${nodeVersion}`);
console.log(`Available Memory: ${availMemory}`);
