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
  
  //MODULO DE CONEXÃO DO BANCO DADOS MONGODB
  var connection = application.config.dbConnectionMongo;
  
  //CLASSE PARA MANIPULAR OBJETOS DO FORMULARIO PARA O BANCO DE DADOS DO MONGODB - MODEL
  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
  UsuariosDAO.inserirLogin(dadosForm);

  res.send('Podemos cadastrar');

}
