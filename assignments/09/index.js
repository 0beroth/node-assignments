#!/usr/bin/env node

import got from 'got';
import * as fs from 'fs';

const url = 'http://ipv4.download.thinkbroadband.com/200MB.zip';
const fileName = '200MB.zip';

const downloadStream = got.stream(url);
const fileWriterStream = fs.createWriteStream(fileName);

downloadStream
	.on('response', () => {
		process.stdout.write('downloading file... ');
	})
	.on('error', (error) => {
		console.error(`Download failed: ${error.message}`);
	});

fileWriterStream
	.on('error', (error) => {
		console.error(`Could not write file to system: ${error.message}`);
	})
	.on('finish', () => {
		console.log('done');
	});

downloadStream.pipe(fileWriterStream);
