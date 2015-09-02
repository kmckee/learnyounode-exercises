var   http = require('http'),
      port = process.argv[2],
    server = http.createServer(handleRequest),
       url = require('url');

function handleRequest(req, res) {
    if(req.method != 'GET')
        return res.end('GETs only!');

    var parsedUrl = url.parse(req.url, true),
             path = parsedUrl.pathname,
             date = new Date(parsedUrl.query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(path.indexOf('parsetime') >= 0){
        res.end(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
    }
    else if(path.indexOf('unixtime') >= 0) {
        res.end(JSON.stringify({unixtime: date.getTime()}));
    } else {
        res.writeHead(404);
        res.end();
    }

}

server.listen(port);
