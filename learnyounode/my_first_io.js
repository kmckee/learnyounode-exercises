var fs = require('fs'),
    filePath = process.argv[2],
    fileBuffer = fs.readFileSync(filePath),
    contents = fileBuffer.toString(),
    lines = contents.split('\n'),
    lineCount = lines.length - 1;
console.log(lineCount);
