var express = require('express');
var router  = express.Router();
var mysql = require('mysql');

// mysql
var connection = mysql.createConnection({
    host    :'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'chatDB'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});

// routerㅇ
router.get('/', function(req, res, next) {
	res.render('join/index', {
		namespace : "join",
		title: 'nodejs - 회원가입'
	});
});

router.post('/', function(req, res, next) {
    connection.query('select * from userinfo',function(err,rows){
        if(err){ res.redirect('/join/fail'); }
        var user  = {
            idx      : rows[rows.length-1].idx + 1,
            email    : req.body.email,
            pswd     : req.body.password,
            nickname : req.body.nickname
        };
        connection.query('insert into userinfo set ?', user, function(err, result){
            if(err){ res.redirect('/join/fail'); }
            res.redirect('/join/success');
        });
    });
});

router.get('/success', function(req, res, next) {
    res.render('join/success', {
        namespace : "join",
        title     : 'nodejs - 회원가입 성공',
        message   : "회원가입이 완료되었습니다."
    });
});

router.get('/fail', function(req, res, next) {
    res.render('join/index', {
        namespace : "join",
        title: 'nodejs - 회원가입 성공',
        message   : "회원가입이 실패하였습니다. 다시 시도해 주세요."
    });
});

module.exports = router;
