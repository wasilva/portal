function EmpresasDAO(connection) {
  this._connection = connection();
}

//PROPRIEDADE INTERNA DA FUNÇÃO EmpresasDAO | RECEBER A FUNÇÃO PARA GRAVAR OS DADOS function(nome_da_tabela)
EmpresasDAO.prototype.inserirEmpresa = function (cadastro_empresa) {
  this._connection.open(function (err, mongoclient) {
    mongoclient.collection("cadastro_empresa", function (err, collection) {
      collection.insert(cadastro_empresa);

      mongoclient.close();
    });
  });
}


module.exports = function () {
  return EmpresasDAO;
}