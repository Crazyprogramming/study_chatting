var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('chatting_step1', {
      namespace : "chattingStep1",
      title: 'nodejs - 채팅방목록'
  });
});

router.get('/room', function(req, res, next) {
    res.render('chatting_step2', {
        namespace : "chattingStep2",
        title: 'nodejs - 채팅방입장 채팅하기'
    });
});

module.exports = router;
