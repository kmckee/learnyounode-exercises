var        split = require('split'),
        through2 = require('through2'),
    shouldUpcase = false;

process.stdin
    .pipe(split())
    .pipe(through2(function(line, notused, next) {
        var             s = line.toString() + '\n',
            properlyCased = shouldUpcase ? 
                                s.toUpperCase() :
                                s.toLowerCase();
        this.push(properlyCased);
        shouldUpcase = !shouldUpcase;
        next();
    }))
    .pipe(process.stdout);
