//Ex. 4 Make a page that has on it an element that is 200px by 200px in size and has a solid background color. Nest within that element another element that is 50px by 50px in size and has a different solid background color. When the user clicks on the outer element its background color should change to a randomly selected color. However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.

(function () {
    var box = document.getElementById("box");
    var button = document.getElementById("btn");

    function generateRandomColor() {
        return Math.floor(Math.random() * 256);
    }
    function randomColor() {
        var r = generateRandomColor();
        var g = generateRandomColor();
        var b = generateRandomColor();
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    box.addEventListener("click", function (evt) {
        box.style.backgroundColor = randomColor();
    });

    button.addEventListener("click", function (evt) {
        button.style.backgroundColor = randomColor();
        evt.stopPropagation();
    });
})();
