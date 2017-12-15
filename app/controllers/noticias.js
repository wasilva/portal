module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(req.params.search, function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(req.query.id_noticia, function(error, result){
        res.render('noticias/noticia', { noticia : result });
    });
}

module.exports.portalnoticias = function(application, req, res){
  
      var connection = application.config.dbConnection();
      var noticiasModel = new application.app.models.NoticiasDAO(connection);
  
      noticiasModel.get5UltimasNoticias(function(error, result){
          res.render('noticias/portalnoticias', { noticias : result });
      });
  }