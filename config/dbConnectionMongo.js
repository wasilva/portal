/* */
var mongo = require('mongodb')

var connMongoDB = function ()
{
  return new mongo.Db('wasinfo_db', new mongo.Server('localhost', 27017, {}), {});
}

module.exports = function ()
{
  return connMongoDB;
}


