//CONTROLE DE ROTAS PARA PAGINA DE NOTICIAS - VIASUALIZAR TODOS
module.exports.noticias = function (application, req, res)
{
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias(req.params.search, function (error, result)
  {
    res.render('noticias/noticias', { noticias: result });
  });
}

//CONTROLE DE ROTAS PARA PAGINA DE VISUALIZAÇÃO DA NOTICIA
module.exports.noticia = function (application, req, res)
{
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticia(req.query.id_noticia, function (error, result)
  {
    res.render('noticias/noticia', { noticia: result });
  });
}

//CONTROLE DE ROTAS PARA PAGINA DE VISUALIZAÇÃO DA NOTICIA
module.exports.portalnoticias = function (application, req, res)
{

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.get5UltimasNoticias(function (error, result)
  {
    res.render('noticias/portalnoticias', { noticias: result });
  });
}

//CONTROLE DE ROTAS PARA A PAGINA CADASTRO DE NOTICIAS
module.exports.cadastronoticia = function (application, req, res)
{
  res.render('cadastro/cadastronoticia', { validacao: {}, noticia: {} });
}

//CONTROLE DE ROTAS PARA A PAGINA CADASTRO DE NOTICIAS E VALIDAÇÃO DE ERRROS DA PAGINA
module.exports.noticias_salvar = function (application, req, res)
{
  var noticia = req.body;

  req.assert('titulo', 'Título é obrigatório').notEmpty();
  req.assert('resumo', 'Resumo é obrigatório').notEmpty();
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor é obrigatório').notEmpty();
  req.assert('data_noticia', 'Data é obrigatório').notEmpty();
  req.assert('noticia', 'Notícia é obrigatório').notEmpty();

  var erros = req.validationErrors();

  if (erros) {
    res.render('cadastro/cadastronoticia', { validacao: erros, noticia: noticia });
    return;
  }

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia, function (error, result)
  {
    res.redirect('/noticias');
  });
}