module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.get('/painel_configuracao_noticias', function(req,res){
        application.app.controllers.admin.painel_configuracao_noticias(application, req, res);
    });

    application.post('/noticias/salvar', function(req,res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });
}