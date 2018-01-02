module.exports.erp = function (application, req, res)
{
  //VALIDA SE A SESSÃO DO USUÁRIO FOI AUTENTICADA PARA DIRECIONAR PARA ROTA ERP
  if (req.session.autorizado) {
    res.render('portal/erp');
  } else {
    res.send('É necessário autenticação para acessar o ERP.');
  }
}

module.exports.sair = function (application, req, res)
{
req.session.destroy(function(err){
res.render('login/login', { validacao: {}, dadosForm: {} });
});
}

