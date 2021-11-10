(function () {
    var burger = document.getElementById("burgermenu");
    var x = document.getElementById("x");
    var overlay = document.getElementById("overlay");
    var sidemenu = document.getElementById("sidemenu");

    burger.addEventListener("click", function () {
        sidemenu.classList.add("on");
        overlay.classList.add("on");
    });

    x.addEventListener("click", function (evt) {
        sidemenu.classList.remove("on");
        overlay.classList.add("on");
        evt.stopPropagation();
    });

    overlay.addEventListener("click", function (evt) {
        sidemenu.classList.remove("on");
        overlay.classList.add("on");
        evt.stopPropagation();
    });
})();
