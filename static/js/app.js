$(document).ready(function() {
    $("#connect").click(function() {
        post("/send_command", JSON.stringify({"command": "command"}));
    });

    $("#streamon").click(function() {
        post("/send_command", JSON.stringify({"command": "streamon"}));
    });

    $("#takeoff").click(function() {
        post("/send_command", JSON.stringify({"command": "takeoff"}));
    });

    $("#forward").click(function() {
        post("/send_command", JSON.stringify({"command": "forward 20"}));
    });

    $("#left").click(function() {
        post("/send_command", JSON.stringify({"command": "left 20"}));
    });

    $("#right").click(function() {
        post("/send_command", JSON.stringify({"command": "right 20"}));
    });

    $("#backward").click(function() {
        post("/send_command", JSON.stringify({"command": "back 20"}));
    });

    $("#land").click(function() {
        post("/send_command", JSON.stringify({"command": "land"}));
    });

    $("#take_photo").click(function() {
        $.get("/take_photo", function(data){});
    });
});

function post(url, command) {
    $.ajax({
        url: url,
        data: command,
        type: 'POST',
        contentType: 'application/json'
    }).done(function(data){
        console.log("done");
    });
}