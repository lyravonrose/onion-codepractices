(function () {
    var burger = document.getElementById("burgermenu");
    var x = document.getElementById("x");
    var overlay = document.getElementsByClassName("overlay")[0];
    var sidemenu = document.getElementById("sidemenu");

    burger.addEventListener("click", function () {
        sidemenu.classList.add("on");
        overlay.classList.add("overlay_on");
    });

    x.addEventListener("click", function (evt) {
        sidemenu.classList.remove("on");
        overlay.classList.remove("overlay_on");
        evt.stopPropagation();
    });

    overlay.addEventListener("click", function (evt) {
        sidemenu.classList.remove("on");
        overlay.classList.remove("overlay_on");
        evt.stopPropagation();
    });
})();
