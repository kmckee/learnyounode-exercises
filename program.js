var directory = process.argv[2],
    extensionFilter = process.argv[3],
    ls = require('./myModule.js');

ls(directory, extensionFilter, function(err, matchingFiles) {
    matchingFiles.forEach(function(matchingFile) {
        console.log(matchingFile);
    });
});
