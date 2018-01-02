/* */
var mongo = require('mongodb')

var connMongoDB = function ()
{
  return new mongo.Db('wasinfo_db', new mongo.Server('localhost', 27017, {}), {});
  //return new mongo.Db('wasinfo_db', new mongo.Server('mongodb://wasadmin:WASinfo1985@tatooine.mongodb.umbler.com/wasinfo_bd', 36748, {}), {});
}

module.exports = function ()
{
  return connMongoDB;
}


