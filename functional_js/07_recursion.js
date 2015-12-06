function reduce(arr, fn, initial) {
    if (arr.length === 0) {
        return {};
    }
   var head = arr.shift();
   var mutated = fn(initial, head);
   return reduce(arr, fn, mutated);
}

module.exports = reduce
