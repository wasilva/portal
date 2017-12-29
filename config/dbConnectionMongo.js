/* */
var mongo = require = ('mongodb')

var connMongoDB =  function(){
console.log('Entrou na funcao de conexao');
  var db = new mongo.Db(
    'wasinfo_db',
    new mongo.Server(
      'localhost',
      27017,
      {}
    ),
    {}
  );
  return db;

}

module.export = function(){
  return conMongoDB;
}


