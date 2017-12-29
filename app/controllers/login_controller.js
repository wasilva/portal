module.exports.login = function(application, req, res){
      res.render('login/login', { validacao: {}, dadosForm: {} });
}

module.exports.autenticar = function(application, req, res){
  var dadosForm = req.body;

  req.assert('login', 'Login não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazio').notEmpty();

  var erros = req.validationErrors();
  

  if(erros){
    res.render('login/login', { validacao: erros, dadosForm: dadosForm });
    return;
  }

  res.send('Sessão pode ser criada');

}

