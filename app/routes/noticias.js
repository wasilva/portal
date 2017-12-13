const controller = require('../controllers/noticias');

module.exports = function (application)
{
  application.get('/noticia', function (req, res)
  {
    application.app.controllers.noticias.noticia(application, req, res);
  });

  application.get('/noticiapage', function (req, res)
  {
    application.app.controllers.noticias.noticiapage(application, req, res);
  });

  application.get('/noticiapage', controller.list);
  application.get('/noticias', controller.list);
  application.get('/noticias/:s', controller.search);
}