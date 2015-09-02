var fs = require('fs'),
    filePath = process.argv[2];
fs.readFile(filePath, function callback(err, buffer) {
    var contents = buffer.toString(),
    lines = contents.split('\n'),
    lineCount = lines.length - 1;
    console.log(lineCount);
});
