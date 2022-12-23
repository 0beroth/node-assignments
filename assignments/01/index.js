#!/usr/bin/env node

const os = require('os');

const system = os.platform();
const nodeVersion = process.versions.node;
const availMemory =os.freemem();

console.log(`Operating system: ${system}`);
console.log(`Node Version: ${nodeVersion}`);
console.log(`Available Memory: ${availMemory}`);


