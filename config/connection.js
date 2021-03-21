const MongoClient = require('mongodb').MongoClient

const atlasUrl = process.env.atlasUri
let db = null

module.exports.connect = function (callback) {
    const dbname = 'groceryDb'
    const url = 'mongodb://localhost:27017/' + dbname

    MongoClient.connect(url, { useUnifiedTopology: true }, (err, data) => {
        if (err) {

            return callback(' error at atlas')
        }
        db = data.db(dbname)
        callback()
    })
}

module.exports.get = function () {
    return db
}
module.exports.db = db