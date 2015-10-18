var q = require('q');

function parseSync() {
    var json = process.argv[2];
    return JSON.parse(json);
}

Q.fcall(parseSync)
.then(
        function() { console.log('success??'); }, 
        console.log
);
