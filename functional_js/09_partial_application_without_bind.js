function logger(namespace) {
    return function(/* arguments */) {
        arguments[0] = namespace + ' ' + arguments[0];
        return console.log.apply(null, arguments);
    };
}

module.exports = logger
