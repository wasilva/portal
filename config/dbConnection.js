var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'WASinfo1985',
      database: 'bd_wasinfo'
    });
}

module.exports = function(){
    return connMySQL;
}