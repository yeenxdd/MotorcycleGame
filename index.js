var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 500;
c.height = 350;
document.body.appendChild(c);

function loop(){
    ctx.fillRect(0, 0, c.width, c.height);
    requestAnimationFrame(loop);
}

loop();