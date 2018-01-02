//ROTA PARA A PAGINA INICIAL DO ERP
module.exports = function(application){
    application.get('/erp', function(req,res){
        application.app.controllers.erp_controller.erp(application, req, res);
    });

    application.get('/sair', function(req,res){
      application.app.controllers.erp_controller.sair(application, req, res);
  });
}