var through = require('through2'),
    stream = through(write); // <=== through takes a function and returns a stream thru it.

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

process.stdin.pipe(through(write)).pipe(process.stdout);
