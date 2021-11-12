(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var dots = document.querySelectorAll(".dot");
    // console.log(dots);
    // console.log(kitties);
    var timer;
    var currKitty = 0;
    var isTransitioning = false;
    for (var i = 0; dots.length > i; i++) {
        dots[i].addEventListener("click", function (e) {
            console.log("clicking dots");
            var dotIndex = +e.target.id.slice(3);
            if (isTransitioning) {
                return;
            }
            clearTimeout(timer);
            moveKitties(dotIndex);
        });
    }

    function moveKitties(dotIdx) {
        console.log("move kittens here!");

        kitties[currKitty].classList.remove("onscreen");
        kitties[currKitty].classList.add("exit-left");
        dots[currKitty].classList.remove("on");

        currKitty++;

        if (dotIdx != undefined) {
            currKitty = dotIdx;
        }
        if (currKitty >= kitties.length) {
            currKitty = 0;
        }

        kitties[currKitty].classList.add("onscreen");
        dots[currKitty].classList.add("on");
        isTransitioning: true;
        console.log(currKitty);
        // this setTimeout keeps it going
        timer = setTimeout(moveKitties, 4000);
    }

    // this setTimeout Starts the process
    timer = setTimeout(moveKitties, 1000);

    // you want to remove the exit-left class ONLY when that kitty has finished transitioning
    document.addEventListener("transitionend", function (evt) {
        console.log("a transition has just ended");
        if (evt.target.classList.contains("exit-left")) {
            isTransitioning = false;
            evt.target.classList.remove("exit-left");
        }
    });
})();
