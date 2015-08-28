var url = process.argv[2],
    http = require('http');

http.get(url, function (response) {
    var content = "";
    response.setEncoding('utf8');
    response.on('data', function(data) {
        content += data;
    });
    response.on('end', function() {
        console.log(content.length);
        console.log(content);
    });
});
