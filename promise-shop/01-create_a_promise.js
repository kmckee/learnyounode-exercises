var     q = require('q'),
    defer = q.defer();

defer.promise.then(console.log);

setTimeout(function() { 
    defer.resolve('RESOLVED!');
}, 300);

