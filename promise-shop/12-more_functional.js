var qhttp = require('q-io/http'),
    async = require('async'),
    q = require('q');

function readUser(id) {
    return qhttp.read("http://localhost:7001/" + id); 
}

[qhttp.read, readUser, JSON.parse, console.log]
    .reduce(q.when, q('http://localhost:7000'));

qhttp.read('http://localhost:7000')
     .then(readUser)
     .then(JSON.parse)
     .then(console.log);
