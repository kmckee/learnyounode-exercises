var mongo          = require('mongodb').MongoClient,
    size           = process.argv[2],
    url            = 'mongodb://localhost:27017/learnyoumongo';
    
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('prices');
    collection.aggregate([
        { $match: { size: size } },
        { $group: { _id: "average", price: { $avg: "$price" } } }
    ], function(err, results) {
        if(err) throw err;
        var averagePrice = results[0].price;
        console.log(averagePrice.toFixed(2));
        db.close();
    });
});
