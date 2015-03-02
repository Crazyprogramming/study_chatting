var member = require('./Member.js');

module.exports = function (roomName) {
    var memberList = [];
    this.RoomID = generateGUID();
    this.RoomName = roomName;
    this.MemberCount = 0;
    
    this.CallBack_EmptyRoom;

    function generateGUID() {
        var getUid = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (getUid() + getUid() + "-" + getUid() + "-" + getUid() + "-" + getUid() + "-" +
                getUid() + getUid() + getUid()).toUpperCase();
    }

    this.AddMember = function (item) {
        

        var hasArray = memberList.filter(function (e, i, a) {
            return e.email == item;
        });
        
        if (hasArray.length == 0) {
            var newMember = new member();
            newMember.email = item;
            memberList.push(newMember);
            this.MemberCount = memberList.length;
        }
    }

    this.RemoveMember = function (item) {
        
        memberList.forEach(function (e, i, a) {
            if (e.email == item) {
                delete memberList[i];
                this.MemberCount = --memberList.length;
                return false;
            }

            return true;
        });

        if (memberList.length == 0 || this.CallBack_EmptyRoom != null) {
            this.CallBack_EmptyRoom(this);
        }
    }
}