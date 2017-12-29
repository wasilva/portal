//ROTAS PARA AS PAGINAS NOTICIAS
module.exports = function (application)

{

  application.get('/noticias', function (req, res)
  {
    application.app.controllers.noticias_controller.noticias(application, req, res);
  });

  application.get('/noticias/:search', function (req, res)
  {
    application.app.controllers.noticias_controller.noticias(application, req, res);
  });

  application.get('/noticia', function (req, res)
  {
    application.app.controllers.noticias_controller.noticia(application, req, res);
  });

  application.get('/portalnoticias', function (req, res)
  {

    application.app.controllers.noticias_controller.portalnoticias(application, req, res);

  });




}