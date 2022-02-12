// Ex. 1
// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color. Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.
// mousemove or mouseenter
// offsetX offsetY
//pageX pageY

(function () {
    var box = document.getElementById("box");
    box.addEventListener("mouseenter", function (evt) {
        var x = evt.pageX - 50;
        var y = evt.pageY - 50;
        box.style.left = x + "px";
        box.style.top = y + "px";
        // console.log("mouseover");
    });
})();
