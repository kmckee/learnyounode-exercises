var mongo = require('mongodb').MongoClient,
    url   = 'mongodb://localhost:27017/learnyoumongo',
    minimumAge = parseInt(process.argv[2]);
    
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var parrots = db.collection('parrots'),
        filter = { age: { $gt: minimumAge } },
        desiredFields = {name: 1, age: 1, _id: 0};
    parrots.find(filter)
           .toArray(function(err, documents) {
                if (err) throw err;
                console.log(documents);
                db.close()
            });
});
