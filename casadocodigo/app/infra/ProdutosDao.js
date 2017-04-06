function ProdutosDao(conn) {
    this._conn = conn;
}

ProdutosDao.prototype.lista = function(callback) {
    this._conn.query('select * from livros', callback);
}

ProdutosDao.prototype.salvar = function(produto, callback) {
    this._conn.query('insert into livros set ?', produto, callback);
}
module.exports = function() {
    return ProdutosDao;
}