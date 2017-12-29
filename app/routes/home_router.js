//ROTA PARA A PAGINA HOME
module.exports = function(application){
    application.get('/', function(req,res){
        application.app.controllers.home_controller.index(application, req, res);
    });
}