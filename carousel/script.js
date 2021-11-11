(function () {
    var kitties = document.querySelectorAll("#kitties img");
    // console.log(kitties);
    var currKitty = 0;
    // var nextKitty = 1;
    function moveKitties() {
        console.log("move kittens here!");

        // kitties[0].classList.remove("onscreen");
        // kitties[0].classList.add("exit-left");
        // kitties[1].classList.add("onscreen");
        currKitty++;

        if (currKitty >= kitties.length) {
            currKitty = 0;
        }
        console.log(currKitty);
        // this setTimeout keeps it going
        setTimeout(moveKitties, 4000);
    }

    // this setTimeout Starts the process
    setTimeout(moveKitties, 1000);

    // you want to remove the exit-left class ONLY when that kitty has finished transitioning
    document.addEventListener("transitionend", function (evt) {
        console.log("a transition has just ended");
        if (evt.target.classList.contains("exit-left")) {
            evt.target.classList.remove("exit-left");
        }
    });
})();
