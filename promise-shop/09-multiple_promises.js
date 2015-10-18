var q = require('q');

var promise1 = q.when('PROMISES'),
    promise2 = q.when('FTW');

function all(p1, p2) {
    var    defer = q.defer(),
         counter = 0,
        promises = [p1, p2],
          values = [];

    promises.forEach(function (promise, index) {
        promise.then(function(value) {
            counter = counter + 1;
            values[index] = value;

            if (counter >= promises.length) { 
                defer.resolve(values);
            }
        }, defer.reject);
    });
    
    return defer.promise;
}

all(promise1, promise2).then(console.log);
