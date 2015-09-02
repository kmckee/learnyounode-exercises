var   http = require('http'),
      port = process.argv[2],
    server = http.createServer(handleRequest),
       map = require('through2-map');

function handleRequest(req, res) {
    if(req.method != 'POST')
        return res.end('Posts only!');
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
}

server.listen(port);
