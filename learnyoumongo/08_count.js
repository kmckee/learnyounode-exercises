var mongo          = require('mongodb').MongoClient,
    minimumAge     = parseInt(process.argv[2]),
    url            = 'mongodb://localhost:27017/learnyoumongo';
    
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection('parrots');
    collection.count({
        age: { $gt: minimumAge }
    }, function complete(err, count) {
        console.log(count);
        db.close();
    });
});
