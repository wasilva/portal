module.exports.cadastrologin = function (application, req, res)
{
  res.render('cadastro/cadastrologin', { validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function (application, req, res)
{
  var dadosForm = req.body;

  req.assert('nome', 'Nome não pode ser vazio').notEmpty();
  req.assert('login', 'Login não pode ser vazio').notEmpty();
  req.assert('tipoacesso', 'Tipo de acesso não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazio').notEmpty();

  var erros = req.validationErrors();

  if (erros) {
    res.render('cadastro/cadastrologin', { validacao: erros, dadosForm: dadosForm });
    //res.send('Existem campos obrigatórios em vazio');
    return;
  }
  //var usuariosDAO = new application.app.models.usuariosDAO;
  res.send('Podemos cadastrar');

}
