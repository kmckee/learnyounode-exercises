var mongo          = require('mongodb').MongoClient,
    dbName         = process.argv[2],
    collectionName = process.argv[3],
    idToRemove     = process.argv[4],
    url            = 'mongodb://localhost:27017/learnyoumongo';
    
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var collection = db.collection(collectionName);
    collection.remove({
        _id: idToRemove
    }, function complete(err) {
        if(err) throw err;
        db.close();
    });
});
