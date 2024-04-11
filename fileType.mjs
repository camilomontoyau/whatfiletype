import { fileTypeFromFile } from 'file-type';

const filePath = process.cwd() + '/' + process.argv[2];

(async () => {
  const fileType = await fileTypeFromFile(filePath);
  console.log(JSON.stringify({fileType, filePath}, null, 2));
})();
