
var dbConnection = require('../../config/dbConnection');
module.exports = function(app){
    app.get('/cadastro_login', function(req,res){
        var connection = dbConnection();
        connection.query("SELECT * FROM cadastro_login", function(error, result){
            res.render('cadastro/cadastro_login', { cadastro_login : result });
          
        });
    });
}