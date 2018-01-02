function UsuariosDAO(connection) {
  this._connection = connection();
}

//PROPRIEDADE INTERNA DA FUNÇÃO UsuariosDAO | RECEBER A FUNÇÃO PARA GRAVAR OS DADOS function(nome_da_tabela)
UsuariosDAO.prototype.inserirLogin = function (cadastro_login) {
  this._connection.open(function (err, mongoclient) {
    mongoclient.collection("cadastro_login", function (err, collection) {
      collection.insert(cadastro_login);

      mongoclient.close();
    });
  });
}

//FUNÇÃO PARA AUTENTICAR O LOGIN
UsuariosDAO.prototype.autenticar = function (cadastro_login, req, res) {
  this._connection.open(function (err, mongoclient) {
    mongoclient.collection("cadastro_login", function (err, collection) {
      collection.find(cadastro_login).toArray(function (err, result) {

        if (result[0] != undefined){

          req.session.autorizado = true;

          req.session.login = result[0].login;
          req.session.tipoacesso = result[0].tipoacesso;
          
        }

        if (req.session.autorizado){
          res.redirect("/erp");
        }else{
          res.render("login/login", { validacao:{}, dadosForm:{}}); 
        }

      });
      mongoclient.close();
    });
  });
}

module.exports = function () {
  return UsuariosDAO;
}