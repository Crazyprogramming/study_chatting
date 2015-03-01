var roomModule = require('./Room.js');

module.exports = new function () {
    var roomList = [];
    this.length = 0;

    this.AddRoom = function (room) {
        roomList.push(room);
        this.length = roomList.length;
    }
    
    this.RemoveRoom = function (room) {
        
        for (var i = 0; i < roomList.length; i++) {
            if (roomList[i].RoomID == room.RoomID) {
                delete roomList[i];
                this.length = --roomList;
            }
        }
    }
    
    this.GetRoom = function (idx) {
        return roomList[idx];
    }
    
    this.GetRoomList = function () {
        return roomList;
    }

    this.GetRoomListJson = function () {
        var list = [];
        
        for (var i = 0; i < roomList.length; i++) {
            var json = { roomName: roomList[i].RoomName, memberCount: roomList[i].MemberCount };
            list.push(json);
        }

        return list;
    }
}