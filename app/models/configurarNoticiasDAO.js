function configurarNoticiasDAO(connection){
    this._connection = connection;
}

configurarNoticiasDAO.prototype.getConfigurarNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias_configuracao', callback);
}

module.exports = function(){
    return configurarNoticiasDAO;
}