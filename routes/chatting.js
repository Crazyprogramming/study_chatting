var express = require('express');
var router = express.Router();
var room = require('../AppCode/Room.js');
var roomCollection = require('../AppCode/RoomCollection.js');

router.get('/', function (req, res, next) {
    
    for (var i = 0; i < 10; i++) {
        var newRoom = new room('testRoom' + i);
        newRoom.AddMember('member' + i);
        roomCollection.AddRoom(newRoom);
    }
    
    var list = roomCollection.GetRoomListJson();

    res.render('chatting_step1', {
        namespace : "chattingStep1",
        title: 'nodejs - 채팅방목록',
        rooms: list
    });
});

router.get('/room', function (req, res, next) {
    res.render('chatting_step2', {
        namespace : "chattingStep2",
        title: 'nodejs - 채팅방입장 채팅하기'
    });
});

module.exports = router;
