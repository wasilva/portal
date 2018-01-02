//IMPORTAR MODULO DE CRYPTO
var crypto = require("crypto");

function UsuariosDAO(connection) {
  this._connection = connection();
}

//PROPRIEDADE INTERNA DA FUNÇÃO UsuariosDAO | RECEBER A FUNÇÃO PARA GRAVAR OS DADOS function(nome_da_tabela)
UsuariosDAO.prototype.inserirLogin = function (cadastro_login) {
  this._connection.open(function (err, mongoclient) {
    mongoclient.collection("cadastro_login", function (err, collection) {

      //CRIPTOGRAFA A SENHA  
      var senha_criptografada = crypto.createHash("sha1").update(cadastro_login.senha).digest("base64");

      //CONVERTE A SENHA DIGITADA NA SENHA CRIPTOGRAFADA
      cadastro_login.senha = senha_criptografada
      
      //console.log(senha_criptografada);
      collection.insert(cadastro_login);

      mongoclient.close();
    });
  });
}

//FUNÇÃO PARA AUTENTICAR O LOGIN
UsuariosDAO.prototype.autenticar = function (cadastro_login, req, res) {
  this._connection.open(function (err, mongoclient) {
    mongoclient.collection("cadastro_login", function (err, collection) {

      //RECUPERA A SENHA CRIPTOGRAFADA
      var senha_criptografada = crypto.createHash("sha1").update(cadastro_login.senha).digest("base64");
      
      //CONVERTE A SENHA CRIPTOGRAFADA NA SENHA DIGITADA
      cadastro_login.senha = senha_criptografada
      
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