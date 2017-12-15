function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(search, callback){
  if (!search) {
    this._connection.query('SELECT * FROM noticias', callback);
  }
  else {
    this._connection.query(`SELECT * FROM noticias WHERE titulo LIKE "%${search}%" ORDER BY data_criacao DESC`, callback);
  }
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback)
{
  console.log(id_noticia);
  this._connection.query('SELECT * FROM noticias WHERE id_noticia = ' + id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}
//PESQUISAR NOTICIA
NoticiasDAO.prototype.seachNoticia = function(callback){
  this._connection.query(`SELECT * FROM noticias WHERE titulo LIKE "%${value}%" ORDER BY data_criacao DESC`, seachNoticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}