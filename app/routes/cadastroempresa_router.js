
//ROTA PARA A PAGINA cadastroempresa
module.exports = function (application) {
  application.get('/cadastroempresa', function (req, res) {
    application.app.controllers.cadastroempresa_controller.cadastroempresa(application, req, res);
  });
}