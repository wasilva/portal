
//ROTA PARA A PAGINA servicos
module.exports = function (application) {
  application.get('/servicos', function (req, res) {
    application.app.controllers.servicos_controller.servicos(application, req, res);
  });
}