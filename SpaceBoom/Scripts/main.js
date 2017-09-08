window.addEventListener("load", onLoad, false);

function onLoad() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    // Sets a function to be called on keystrokes
    document.addEventListener("keydown", keyPush);
    // Tick Interval rate for the game function
    setInterval(game, 1000 / 15);
}
// player initial starting position
px = py = 10;

tc = 40;

// Everybody wants to score
score = 0;

function game() {

    // physics

    // velocity
    px += xv;
    py += yv;

    // gfx

    // background fill
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // apples
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

    // The Rocket
    var img = new Image();
    img.onload = function() {
    ctx.scale(.1,.1);
    ctx.drawImage(img, px, py);
    }
img.src = "https://openclipart.org/download/261325/black-and-white-rocket.svg";
}

// scancodes 37-40 left, down, right, up
function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}
