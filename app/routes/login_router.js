//ROTA PARA A PAGINA LOGIN
module.exports = function(application){
  application.get('/login', function(req,res){
    application.app.controllers.login_controller.login(application, req, res);
});

//ROTA PARA AUTENTICAÇÃO DO LOGIN
application.post('/autenticar', function(req,res){
  application.app.controllers.login_controller.autenticar(application, req, res);
});

}


