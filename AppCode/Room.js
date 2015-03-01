module.exports = function (roomName) {
    var memberList = [];
    this.RoomID = generateGUID();
    this.RoomName = roomName;
    this.MemberCount = 0;

    function generateGUID() {
        var getUid = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        return (getUid() + getUid() + "-" + getUid() + "-" + getUid() + "-" + getUid() + "-" +
                getUid() + getUid() + getUid()).toUpperCase();
    }

    this.AddMember = function(member) {
        memberList[member] = member;
        this.MemberCount = ++memberList;
    }
}