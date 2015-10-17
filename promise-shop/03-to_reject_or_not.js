var     q = require('q'),
    defer = q.defer();

defer.promise.then(console.log, console.log);

setTimeout(function() { 
    defer.resolve('I FIRED');
    defer.reject(new Error('I DID NOT FIRE'));
}, 300);

