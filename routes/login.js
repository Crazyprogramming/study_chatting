var express = require('express');
var db = require('../AppCode/DbController.js');
var router = express.Router();

router.get('/', function(req, res, next){
	if(req.cookies.auth){
		res.redirect('/login/success');
	}else{
		res.render('./login/index', {
			namespace : "login",
			title : 'nodejs - 로그인',
			message : "로그인해주세요." 
		});		
    }
});

router.post('/', function(req, res, next){
	var email = req.param("email");
    var pw = req.param("password");
	
    db.doLogin(email, pw, function (result, err) {
        if (err || !result) {
            res.redirect('/login/fail');
        }
        else {
            res.cookie('auth', true);
            res.redirect('/login/success');
        }
    });
});

router.get('/success', function(req, res, next){
	res.render('login/success', {
		namespace : "login",
		title : 'nodejs - 로그인 성공',
		message : "로그인 완료..." 
	});
});

router.get('/fail', function(req, res, next){
	res.render('login/fail', {
		namespace : "login",
		title : 'nodejs - 로그인 실패',
		message : "로그인이 실퍠하였습니다.<br/>다시 시도해 주세요." 
	});
});

module.exports = router;
