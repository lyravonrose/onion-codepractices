(function () {
    var can = document.querySelector("canvas");
    var ctx = can.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "darksalmon";

    ctx.moveTo(100, 50);
    ctx.lineTo(100, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "midnightblue";
    ctx.moveTo(100, 200);
    ctx.lineTo(250, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "olivedrab";
    ctx.moveTo(250, 200);
    ctx.lineTo(100, 50);
    ctx.stroke();

    ctx.fillStyle = "aqua";
    ctx.fillRect(350, 100, 120, 100);

    ctx.drawImage(document.querySelectorAll("img"), 100, 250, 100, 200);

    ctx.beginPath();
    ctx.arc(150, 300, 50, 0, 2 * Math.PI);
    ctx.fill();

    can.addEventListener("dblclick", function () {
        ctx.clearRect(0, 0, can.width / 3, can.height);
    });
})();
