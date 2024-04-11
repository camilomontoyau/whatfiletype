#!/usr/bin/env node
const fileType = require('file-type');
const { fileTypeFromFile } = fileType;

let filePath = '';
if (process.argv[2]) {
  filePath = `${process.cwd()}/${process.argv[2]}`;
} else if (process.argv[1]) {
  filePath = `${process.cwd()}/${process.argv[1]}`;
} else {
  throw new Error('No file path provided');
}


(async () => {
  const fileType = await fileTypeFromFile(filePath);
  console.log(JSON.stringify({fileType, filePath}, null, 2));
})();
