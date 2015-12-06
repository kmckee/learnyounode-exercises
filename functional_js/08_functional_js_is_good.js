function duckCount(/* arguments */) {
    return Array.prototype.filter.call(arguments, function(current) {
        return Object.prototype.hasOwnProperty.call(current, 'quack');
    }).length;
}

module.exports = duckCount
