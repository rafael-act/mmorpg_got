var MongoClient = require("mongodb").MongoClient;

var connMongoDB = function () {
  return {
    open: function (callback) {
      MongoClient.connect(
        "mongodb://127.0.0.1:27017",
        { useUnifiedTopology: true },
        function (err, client) {
          if (err) return callback(err);

          var db = client.db("got");
          db.close = function () {
            client.close();
          };

          callback(null, db);
        }
      );
    },
  };
};

module.exports = function () {
  return connMongoDB;
};