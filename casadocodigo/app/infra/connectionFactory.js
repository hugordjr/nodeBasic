var mysql = require('mysql');
function createDbConnection() {
        return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'admin',
            database:'casadocodigo'
        });
}
//wrapper
module.exports = function() {
    return createDbConnection;
}