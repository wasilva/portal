module.exports = function (application)
{
  //ROTA PARA A PAGINA cadastrologin
  application.get('/cadastrologin', function (req, res)
  {
    application.app.controllers.cadastrologin_controller.cadastrologin(application, req, res);
  });

  //ROTA PARA A PAGINA cadastrar
  {
    application.post('/cadastrar', function (req, res)
    {
      application.app.controllers.cadastrologin_controller.cadastrar(application, req, res);
    });

  }


}