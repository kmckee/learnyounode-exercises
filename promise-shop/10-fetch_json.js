var qio = require('q-io/http');

qio.read("http://localhost:1337")
.then(function(response) {
    console.log(JSON.parse(response));
}).then(null, console.error)
.done();

