var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', {
      namespace : "login",
      title: 'nodejs - 로그인'
  });
});

module.exports = router;
