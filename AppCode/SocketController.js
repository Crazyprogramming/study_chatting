module.exports = function (server){
    this.io = require('socket.io').listen(server);
    var rooms = require('./RoomCollection.js');

    io.on('connection', function (socket) {
        
        socket.on('InitMember', function (data) {
            var room = rooms.GetRoom(data.roomID);
            var member = room.GetMember(data.midx);
            this.room = room;
            this.member = member;
            member.socket = this;
        });

        socket.on('SenMessage', function (msg) {
            var members = this.room.GetMemgerList();
            var sendername = this.member.nickname;
            members.forEach(function (e, i, a) {
                e.socket.emit('ReciveMessage', {msg: msg, sender: sendername});
            });
        });
    });
}