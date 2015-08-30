var    net = require('net'),
      port = process.argv[2],
    server = net.createServer(handleRequest);

server.listen(port);

function handleRequest(socket) {
    var formattedDateTime = getCurrentFormattedDateTime();
    socket.write(formattedDateTime);
    socket.end();
}

function getCurrentFormattedDateTime() {
    var          strftime = require('strftime'),
        formattedDateTime = strftime('%Y-%m-%d %H:%M', new Date()); 
    return formattedDateTime;
}
