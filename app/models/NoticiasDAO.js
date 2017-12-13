const connnection = require('../../config/dbConnection');

module.exports.list = function (callback)
{
  connnection.query('SELECT * FROM noticias ORDER BY data_criacao DESC', callback);
}

module.exports.search = (value, callback) => 
{
  connnection.query(`SELECT * FROM noticias WHERE titulo LIKE "%${value}%" ORDER BY data_criacao DESC`, callback);
}

// function NoticiasDAO(connection)
// {
//   this._connection = connection;
// }

// NoticiasDAO.prototype.getNoticia = function (id_noticia, callback)
// {
//   console.log(id_noticia.id_noticia);
//   this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia, callback);
// }

// NoticiasDAO.prototype.salvarNoticia = function (noticia, callback)
// {
//   this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
// }

// NoticiasDAO.prototype.get5UltimasNoticias = function (callback)
// {
//   this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
// }

// module.exports = function ()
// {
//   return NoticiasDAO;
// }