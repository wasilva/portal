//ROTA PARA A PAGINA LOGIN
module.exports = function(application){
  application.get('/login', function(req,res){
    application.app.controllers.login_controller.login(application, req, res);
});
}


