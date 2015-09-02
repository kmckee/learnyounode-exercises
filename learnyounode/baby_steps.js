var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
        var item = process.argv[i];
            sum += Number(item);
}
console.log(sum);
