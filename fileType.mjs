#!/usr/bin/env node
import { fileTypeFromFile } from 'file-type';

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
