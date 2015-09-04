var concat = require('concat-stream');

process.stdin
    .pipe(concat(function(allContent) {
        var reversed = allContent.toString().split('').reverse().join('');
        console.log(reversed);
    }));
