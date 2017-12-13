var mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'WASinfo1985',
  database: 'bd_wasinfo'
});
