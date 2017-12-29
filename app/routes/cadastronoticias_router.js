
//ROTAS PARA A PAGINA cadastronoticia
module.exports = function(application){
    application.get('/cadastronoticia', function(req,res){
        application.app.controllers.noticias_controller.cadastronoticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req,res){
        application.app.controllers.noticias_controller.noticias_salvar(application, req, res);
    });
}