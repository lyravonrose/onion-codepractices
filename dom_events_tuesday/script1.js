// Make a page that has on it an element that is 100px by 100px in size and has a solid black border. When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.

(function () {
    var box = document.getElementById("box");
    function getRandomColor() {
        return Math.floor(Math.random() * 256);
    }

    box.addEventListener("mousedown", function (evt) {
        var r = getRandomColor();
        var g = getRandomColor();
        var b = getRandomColor();
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.backgroundColor = randomColor;
        console.log(randomColor);
    });

    box.addEventListener("mouseup", function (evt) {
        var r = getRandomColor();
        var g = getRandomColor();
        var b = getRandomColor();
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.backgroundColor = randomColor;
        console.log(randomColor);
    });
})();
