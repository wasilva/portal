module.exports = function (application)
{
  //rota para pagina cadastrologin
  application.get('/cadastrologin', function (req, res)
  {
    application.app.controllers.cadastrologin_controller.cadastrologin(application, req, res);
  });

  //rota para pagina cadastrar 
  {
    application.post('/cadastrar', function (req, res)
    {
      application.app.controllers.cadastrologin_controller.cadastrar(application, req, res);
    });

  }


}