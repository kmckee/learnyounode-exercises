var   http = require('http'),
      port = process.argv[2],
    server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var           fs = require('fs'),
        fileLocation = process.argv[3], 
                file = fs.createReadStream(fileLocation);
    file.pipe(res);
}

server.listen(port);
