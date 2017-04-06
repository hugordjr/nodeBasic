module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var conn = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDao(conn);
        produtosDao.lista(function(err, results) {
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            })
            
        });
        conn.end;
    });
    

    
    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });
    
    app.post('/produtos', function(req, res) {
        var conn = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDao(conn);
        
        var produto = req.body;
        produtosDao.salvar(produto, function(err, results) {
            res.redirect('/produtos');
        });
            
    });
    
}