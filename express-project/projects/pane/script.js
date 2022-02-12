//contianer containing a pane and a slider - transformX
//call 'preventDefault' on mousedown, mousemove, mouseup
//Three events:
// 1. mousedown on the bar
// do not pay attention to mousemove until this event happens

// 2. mousemove on the container that contains the whole thing(the two panes and the bar)
// 3. mouseup on the document

//pageX and pageY
//offsetX, clientX

(function () {
    var container = $(".pane");
    var paneTop = $(".pane2");
    var paneBottom = $(".pane1");
    var bar = $(".bar");
    var width;
    var offset;
    var box;

    $(container).on("click", function (evt) {
        $(evt.target).on("mousedown");
    });

    bar.on("mousedown", function (evt) {
        width = container.outerWidth();
        box = container.offset().left;
    });
    // change width how??

    $("body").on("mouseup", function (evt) {
        $(evt.container).off("mousemove");
    });

    container.on("click", function (evt) {
        $(evt.window).on("mousedown");
        evt.preventDefault();
    });
})();
