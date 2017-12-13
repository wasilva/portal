module.exports = function(app){
    app.get('/servicos', function(req,res){
        res.render('servicos/servicos');
    });
}