module.exports.painel_configuracao_noticias = function(application, req, res){
    res.render('admin/painel_configuracao_noticias', { validacao : {}, painel_configuracao_noticias : {} });
}

module.exports.painel_configuracao_salvar = function(application, req, res){
    var painel_configuracao_noticias = req.body;

    req.assert('quantidade', 'Informe a quantidade').notEmpty();
  
    var erros = req.validationErrors();

    if(erros){
        res.render('admin/painel_configuracao_noticias', {validacao: erros,  admin: painel_configuracao_noticias});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasConfig = new application.app.models.configurarNoticiasDAO(connection);

    noticiasConfig.painel_configuracao_salvar(painel_configuracao_noticias, function(error, result){
        res.redirect('/painel_configuracao_noticias');
    });
}