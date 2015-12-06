function Spy(target, method) {
    var result = {
        count: 0
    };
    var original = target[method];
    target[method] = function(/* arguments */) {
        result.count = result.count + 1;
        return original.call(this, arguments);
    };
    return result;
}

module.exports = Spy
