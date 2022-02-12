// feeding Gerald
(function () {
    console.log("yup you are good to write some logic");
    var board = document.getElementById("clickZone");
    //selecting fruit and veg
    var foodAndVeg = document.getElementsByClassName("food");
    // console.log("foodAndVeg:", foodAndVeg);
    var melon = foodAndVeg[0];
    var salad = foodAndVeg[1];
    var grapes = foodAndVeg[2];
    var carrot = foodAndVeg[3];
    // console.log("melon:", melon.innerText);
    // console.log("salad:", salad.innerText);
    // console.log("grapes:", grapes.innerText);
    // console.log("carrot:", carrot.innerText);

    //make it so that we can generate random numbers so that we can change each element's position
    function generateRandomNum() {
        return Math.floor(Math.random() * 100);
    }
    //startingPositions of our fruit and veg
    var melonPos = 30;
    var saladPos = 30;
    var grapesPos = 30;
    var carrotPos = 30;

    board.addEventListener("click", function () {
        console.log("user clicked on board");
        //we want to randomly move our fruit and veg
        //calculate a new position for each thing we want to move
        melonPos += generateRandomNum();
        saladPos += generateRandomNum();
        grapesPos += generateRandomNum();
        carrotPos += generateRandomNum();

        // change the actual elements
        melon.style.left = melonPos + "px";
        salad.style.left = saladPos + "px";
        grapes.style.left = grapesPos + "px";
        carrot.style.left = carrotPos + "px";
    });
    // making the melon button so that we can move the melon independantly
    var melonBtn = document.getElementById("melonBtn");
    melonBtn.addEventListener("click", function (evt) {
        console.log("you want to move the melon");
        melonPos += generateRandomNum();
        melon.style.left = melonPos + "px";
        evt.stopPropagation();
    });

    // let's add disco mode to our game!
    function getRandomColorVal() {
        return Math.floor(Math.random() * 256);
    }
    document.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 68) {
            console.log("user triggered discomode");
            var r = getRandomColorVal();
            var g = getRandomColorVal();
            var b = getRandomColorVal();
            var randomColor = "rgb(" + r + "," + g + "," + b + ")";
            console.log("randomColor: ", randomColor);
            document.body.style.backgroundColor = randomColor;
        }
    });
})();
