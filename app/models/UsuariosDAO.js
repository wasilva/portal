function UsuariosDAO(connection)
{
  //console.log('Objeto carregado');
  this._connection = connection();
}

//PROPRIEDADE INTERNA DA FUNÇÃO UsuariosDAO | RECEBER A FUNÇÃO PARA GRAVAR OS DADOS function(nome_da_tabela)
UsuariosDAO.prototype.inserirLogin = function (cadastro_login)
{
  this._connection.open(function (err, mongoclient){
    mongoclient.collection("cadastro_login", function (err, collection){
      collection.insert(cadastro_login);

      mongoclient.close();
    });
  });
}

module.exports = function ()
{
  return UsuariosDAO;
}