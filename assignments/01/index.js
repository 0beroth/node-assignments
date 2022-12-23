#!/usr/bin/env node

const os = require('os');

console.log(os.platform());

console.log(process.versions.node);

console.log(os.freemem());
