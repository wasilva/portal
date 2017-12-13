const dao = require('../models/NoticiasDAO');

module.exports.list = (req, res) =>
{
  dao.list((error, result) =>
  {
    if (error) return res.render('404');
    res.render('noticias/noticias', { noticias: result });
  });
}

module.exports.search = (req, res) =>
{
  const value = req.params.s;
  dao.search(value, (error, result) =>
  {
    if (error) return res.render('404');
    res.render('noticias/noticias', { noticias: result });
    // res.json(result);
  })
}



module.exports.noticia = function (application, req, res)
{
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  var id_noticia = req.query;

  noticiasModel.getNoticia(id_noticia, function (error, result)
  {
    res.render('noticias/noticia', { noticia: result });
  });
}

module.exports.noticiapage = function (application, req, res)
{
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.get5UltimasNoticias(function (error, result)
  {
    res.render('noticias/noticiapage', { noticias: result });
  });
}