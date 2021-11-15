(function () {
    // var container = document.getElementsByClassName("headlines")[0];
    // var links = container.getElementsByTagName("A");
    // var left = container.offset().left;

    //Jquery refactoring

    var container = $(".headlines");
    var links = $("A");
    var left = container.offset().left;
    // for (var i = 0; i < links.length; i++) {
    //     links[i].addEventListener("mouseenter", function (evt) {
    //         console.log("mouse entered a link");
    //         console.log("on link: ", evt.target);
    //     });

    //     links[i].addEventListener("mouseleave", function (evt) {v
    //         console.log("mouse left a link");
    //         console.log("left link: ".evt.target);
    //     });

    //JQuery
    links.on("mouseenter", function (evt) {
        $(evt.target).on;
    });

    links.on("mouseleave", function (evt) {
        $(evt.target).off;
    });

    function moveHeadlines() {
        left--;
        if (left <= links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
        }
        //outerwidth
        console.log(left);
        //set the left position of the container to the new left variable
        window.requestAnimationFrame(moveHeadlines, 20);
    }
})();
