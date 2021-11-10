(function () {
    var can = document.querySelector("canvas");
    var ctx = can.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    function repeatBody(x, y, x1, y1) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.stroke();
    }

    //neck
    repeatBody(100, 150, 100, 200);

    //left arm
    repeatBody(100, 200, 30, 160);

    //right arm
    repeatBody(100, 200, 165, 160);

    //bottom
    repeatBody(100, 200, 100, 250);

    // //left leg
    repeatBody(100, 250, 30, 300);

    // //right leg
    repeatBody(100, 250, 165, 300);
})();
