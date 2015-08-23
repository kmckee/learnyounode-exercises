module.exports = function(directory, extensionFilter, cb) {
    var fs = require('fs'),
        path = require('path');
    fs.readdir(directory, function (err, files) {
        if(err) {
            cb(err, null);
            return;
        }
        var matches = [];
        files.forEach(function(file) {
            var ext = path.extname(file);
            if(ext == "." + extensionFilter) {
                matches.push(file);
            }
        });
        cb(null, matches);
    });
};
