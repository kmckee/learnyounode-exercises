var fs = require('fs'),
    path = require('path');
fs.readdir(process.argv[2], function callback(err, dirs) {
    dirs.forEach(function(file) {
        var ext = path.extname(file);
        if(ext == "." + process.argv[3]) {
            console.log(file);
        }
    });
});
