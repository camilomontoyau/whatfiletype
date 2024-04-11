fileType.mjs
This script is used to determine the file type of a given file. It uses the file-type library to read the file and determine its type based on the file's binary signature.

How to use
Install the file-type library by running npm install file-type.

Run the script by using the command node fileType.mjs <filename>, where <filename> is the name of the file you want to check. The file should be in the same directory as the script.

How it works
The script first imports the fileTypeFromFile function from the file-type library. It then constructs the file path by concatenating the current working directory (process.cwd()) with the file name provided as a command line argument (process.argv[2]).

The script then uses an asynchronous self-invoking function to read the file and determine its type. The fileTypeFromFile function returns a promise that resolves with an object containing information about the file type, which is then logged to the console in a JSON format.

The output will be an object with two properties: fileType and filePath. The fileType property is an object that contains information about the file type, such as the file extension and MIME type. The filePath property is the path to the file.

```json
{
  "fileType": {
    "ext": "txt",
    "mime": "text/plain"
  },
  "filePath": "/Users/user/example.txt"
}
```

Example
If you run node fileType.mjs example.txt, the output might look like this:

This means that the file example.txt is a plain text file.