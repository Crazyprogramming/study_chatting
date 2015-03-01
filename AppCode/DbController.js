module.exports = new function () {
    var mysql = require('mysql');
    
    var DbConnect = function () { 
        var connection = mysql.createConnection({
            host    : 'localhost',
            port : 3306,
            user : 'root',
            password : 'root',
            database : 'mychat_db'
        });

        connection.connect(function (err) {
            if (err) {
                console.error('mysql connection error');
                console.error(err);
                throw err;
            }
        });

        return connection;
    };
    
    var DbDisconnect = function (connection) { 
        connection.end();
    };
    
    this.doLogin = function (mail, password, compliteFunction) {

        var connection = DbConnect();

        var query = 'select * from userinfo where email = ? and pswd = ?';
        var data = [
            mail,
            password
        ];
        
        connection.query(query, data, function (err, result) {
            if (compliteFunction != null) {
                if (err) {
                    compliteFunction(false, err);
                }
                else {
                    compliteFunction(true);
                }
            }
        });

        DbDisconnect(connection);
    }

    this.insertMember = function (email, password, nickname, compliteFunction) {
        
        var connection = DbConnect();

        var query = 'insert into userinfo set ?';
        var data = {
            email    : email,
            pswd     : password,
            nickname : nickname
        };
        connection.query(query, data, function (err, result) {
            if (compliteFunction != null) {
                if (err) {
                    compliteFunction(false, err);
                }
                else {
                    compliteFunction(true);
                }
            }
        });
        
        DbDisconnect(connection);
    }
}