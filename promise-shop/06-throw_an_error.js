var     q = require('q'),
     json = process.argv[2];

function parsePromised() {
    var defer = q.defer();
    try {
        var parsedJson = JSON.parse(json);
        defer.resolve(parsedJson);
    } catch (e) {
        defer.reject(e);
    }
    return defer.promise;
}

parsePromised().then(
        function() { console.log('success??'); }, 
        console.log
);
