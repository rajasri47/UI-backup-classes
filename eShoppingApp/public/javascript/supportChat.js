
var socket = io("http://localhost:3000");

socket.on("receivemsg", (data) => {
    addMsgToContainer(data, 'receive');
});

var openChatWindow = () => {
    
    $(".chatBoxContainer").show(200);
}

var closeChatWindow = () => {
    $(".chatBoxContainer").hide(200);
}

var sendMsg= () => {
    var userMsg = $("#chatMsg").val();
    $("#chatMsg").val('');
    addMsgToContainer(userMsg, 'send');
    
    socket.emit("userSendMsg", userMsg); // Publish the msg with a key
}

var addMsgToContainer = (msg, type) => {
    var msgBlock = $("<div></div>").text(msg);
    if (type == 'send') {
        msgBlock.addClass('sentmsg');
    } else { // receiving
        msgBlock.addClass('receivemsg');
    }
    $(".msgcontainer").append(msgBlock);
}   