
//ROTA PARA A PAGINA contato
module.exports = function (application) {
  application.get('/contato', function (req, res) {
    application.app.controllers.contato_controller.contato(application, req, res);
  });

  //ROTA PARA ENVIAR CONTATO
application.post('/enviarcontato', function(req,res){
  application.app.controllers.contato_controller.enviarcontato(application, req, res);
});


}