var urls = [process.argv[2], process.argv[3], process.argv[4]],
    http = require('http'),
    responses = [],
    responseCount = 0;

urls.map(function(url, index) {
    http.get(url, function (response) {
        var content = "";
        response.setEncoding('utf8');
        response.on('data', function(data) {
            content += data;
        });
        response.on('end', function() {
            responseCount += 1;
            responses[index] = content;
            if (responseCount == urls.length) {
                console.log(responses[0]);
                console.log(responses[1]);
                console.log(responses[2]);
            }
        });
    });
});
