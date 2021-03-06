// Control Tello using the keyboard

$(document).keydown(function(e) {

    // Get distance
    var distance_units = $("#display_units").text();
    var distance = getDistanceBasedOnUnits(distance_units);

    switch(e.which) {
        case 37: // left arrow for fly left
        console.log("Left arrow key pressed, sending command: left " + distance);
        post("/send_command", JSON.stringify({"command": "left " + distance}));
        break;

        case 38: // up arrow for fly forward
        console.log("Up arrow key pressed, sending command: forward " + distance);
        post("/send_command", JSON.stringify({"command": "forward " + distance}));
        break;

        case 39: // right arrow for fly right
        console.log("Right arrow key pressed, sending command: right " + distance);
        post("/send_command", JSON.stringify({"command": "right " + distance}));
        break;

        case 40: // down arrow for fly backward
        console.log("Down arrow key pressed, sending command: back " + distance);
        post("/send_command", JSON.stringify({"command": "back " + distance}));
        break;

        case 87: // W key for fly up
        console.log("W key pressed, sending command: up " + distance);
        post("/send_command", JSON.stringify({"command": "up " + distance}));
        break;

        case 65: // A key for yaw left
        console.log("A key pressed, sending command: ccw " + $("#yaw_slider").val());
        post("/send_command", JSON.stringify({"command": "ccw " + $("#yaw_slider").val()}));
        break;

        case 83: // S key for fly down
        console.log("S key pressed, sending command: down " + distance);
        post("/send_command", JSON.stringify({"command": "down " + distance}));
        break;

        case 68: // D key for yaw right
        console.log("D key pressed, sending command: cw " + $("#yaw_slider").val());
        post("/send_command", JSON.stringify({"command": "cw " + $("#yaw_slider").val()}));
        break;

        default: return;
    }
    e.preventDefault();
});