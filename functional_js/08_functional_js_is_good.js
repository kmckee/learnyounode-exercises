function duckCount(/* arguments */) {
    return Array.prototype.reduce.call(arguments, function(previous, current) {
        console.log('current', current);
        if (Object.prototype.hasOwnProperty.call(current, 'quack')) {
            return previous + 1;
        }
        return previous;
    }, 0)
}

module.exports = duckCount
