#!/usr/bin/env node

import got from 'got';
import * as fs from 'fs';

const downloadFile = async (url, downloadPath, fileNumber) => {
	const downloadStream = got.stream(url);
 	const fileWriterStream = fs.createWriteStream(downloadPath);
	process.stdout.write(`downloading file ${fileNumber}... `);
	await new Promise((resolve, reject) => {
		downloadStream
			.on('error', (error) => {
				console.log(`Download failed: ${error.message}`);
				reject();
			});

		fileWriterStream
			.on('finish', () => {
				console.log('done.');
				resolve();
			})
			.on('error', (error) => {
				console.log(`Could not write file to system: ${error.message}`);
				reject();
			});

		downloadStream.pipe(fileWriterStream);
	});
};

(async () => {
	try {
	  await downloadFile('http://ipv4.download.thinkbroadband.com/100MB.zip', '100MB.zip', 1);
	  await downloadFile('http://ipv4.download.thinkbroadband.com/200MB.zip', '200MB.zip', 2);
	} catch {
	   console.error('Error has occured, refer to the error message above');
	}
})();

// import got from 'got';
// import * as fs from 'fs';

// const url = 'http://ipv4.download.thinkbroadband.com/200MB.zip';
// const fileName = '200MB.zip';

// const downloadStream = got.stream(url);
// const fileWriterStream = fs.createWriteStream(fileName);

// downloadStream
// 	.on('response', () => {
// 		process.stdout.write('downloading file... ');
// 	})
// 	.on('error', (error) => {
// 		console.error(`Download failed: ${error.message}`);
// 	});

// fileWriterStream
// 	.on('error', (error) => {
// 		console.error(`Could not write file to system: ${error.message}`);
// 	})
// 	.on('finish', () => {
// 		console.log('done');
// 	});

// downloadStream.pipe(fileWriterStream);
