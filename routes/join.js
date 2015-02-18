var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('join', {
      namespace : "join",
      title: 'nodejs - 회원가입'
  });
});

module.exports = router;
