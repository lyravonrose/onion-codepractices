(function () {
    console.log("ottermom");
    var move = document.getElementById("move");
    var moveback = document.getElementById("moveback");
    var box = document.getElementById("box");
    var round = document.getElementById("round");
    var square = document.getElementById("square");

    move.addEventListener("click", function () {
        box.classList.add("on");
    });

    moveback.addEventListener("click", function () {
        box.classList.remove("on");
    });

    round.addEventListener("click", function () {
        box.classList.add("make-round");
    });

    square.addEventListener("click", function () {
        box.classList.remove("make-round");
    });
})();
