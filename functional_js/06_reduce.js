function countWords(words) {
    return words.reduce(function(previous, current) {
        previous[current] = (previous[current] || 0) + 1;
        return previous;
    }, {});
}

module.exports = countWords;
