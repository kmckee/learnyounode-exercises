module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(previous, current) {
        previous.push(fn(current));
        return previous;
    }, []);
}

