var express = require('express');
var router = express.Router();
var room = require('../AppCode/Room.js');
var roomCollection = require('../AppCode/RoomCollection.js');
var db = require('../AppCode/DbController.js');

router.get('/', function (req, res, next) {
    
    // 방목록 출력을 위한 방 임시 데이터 생성 코드
    //var test;
    //for (var i = 0; i < 10; i++) {
    //    var newRoom = new room('testRoom' + i);
    //    newRoom.AddMember('member' + i);
    //    roomCollection.AddRoom(newRoom);
    //    test = newRoom.RoomID;
    //}
    
    //roomCollection.GetRoom(test).RemoveMember('member9');
    
    var list = roomCollection.GetRoomListJson();

    res.render('chatting_step1', {
        namespace : "chattingStep1",
        title: 'nodejs - 채팅방목록',
        rooms: list
    });
});

router.post('/', function (req, res, next) {
    var roomname = req.param('roomname');

    db.CheckRoomName(roomname, function (result, err) {
        if (result) {
            // 방 생성
        }
        else {
            // 동일 방 이름 존재
            // 생성 실패 스크립트 전송
        }
    });
});

router.get('/room', function (req, res, next) {
    res.render('chatting_step2', {
        namespace : "chattingStep2",
        title: 'nodejs - 채팅방입장 채팅하기'
    });
});

module.exports = router;
