var mongo     = require('mongodb').MongoClient,
    url       = 'mongodb://localhost:27017/learnyoumongo',
    firstName = process.argv[2],
    lastName  = process.argv[3];
    
mongo.connect(url, function(err, db) {
    if (err) throw err;
    var docs = db.collection('docs'),
        newDoc = { firstName: firstName, lastName: lastName };
    docs.insert(newDoc, function(err, data) {
        if (err) throw err;
        console.log(JSON.stringify(newDoc));
        db.close();
    })
});
