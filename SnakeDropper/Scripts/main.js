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

//gridsize and total columns
tc = 40;
gs = 20;

//apple grid position
ax = ay = 15;

//x and y velocity (player)
xv = yv = 0;

// need to keep track of all the places the tail is
trail = [];

// length of the snake
tail = 5;

score = 0;

function game() {

    // physics

    // velocity
    px += xv;
    py += yv;

    //wrap on edges
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }

    // gfx

    // background fill
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // snake segments
    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 2;
            score = 0;
        }
        if (trail[i].x == ax && trail[i].y == ay) {
            tail++;
            ax = Math.floor(Math.random() * tc);
            ay = Math.floor(Math.random() * tc);
            score += 20;
        }
    }

    //
    trail.push({
        x: px,
        y: py
    });
    while (trail.length > tail) {
        trail.shift();
    }
    // falling apples
    ay += 1;
    if (ay > tc - 1) {
        ay = 0;
    }

    // apples
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

    //ctx.fillText(score,780,40);
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