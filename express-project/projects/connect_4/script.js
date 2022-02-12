(function (diagonals) {
    var currentPlayer = "player1";
    var slots = $(".slot");

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
        // Or use ternary operater
    }

    $(".column").on("click", function (evt) {
        // console.log(evt.currentTarget);// currentTarget is what is attached to, and target is what we click on
        var slotsInCol = $(evt.currentTarget).children();
        // console.log("slotsInCol: ", slotInCol);
        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log(slotsInCol[i]);
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // console.log("this slot looks empty");
                slotsInCol.eq(i).addClass(currentPlayer);
                break; //break simply ends the loop
            }
        }

        var slotsInRow = $(".row" + i);

        if (i === 0) {
            // console.log("column is full");
            setTimeout(function () {
                alert("column is full 💔");
                window.location.reload();
            }, 500);
            // return;
        }
        if (checkForVictory(slotsInCol)) {
            console.log(currentPlayer, "is the winner");
            // slotsInCol.eq(i).removeClass(currentPlayer);
            setTimeout(function () {
                alert("Lyra is the winner 😈");
                resetGame();
            }, 500);
        }

        if (checkForVictory(slotsInRow)) {
            setTimeout(function () {
                alert("Lyra is the winner 😈");
                resetGame();
            }, 500);
        }

        if (checkForDiagonalVictory(slots, diagonals)) {
            console.log("diagonal victory");
            setTimeout(function () {
                alert("Lyra is the winner 😈");
                resetGame();
            }, 500);
        }

        switchPlayer();
    });

    function checkForDiagonalVictory(slots, diagonals) {
        for (var i = 0; i < diagonals.length; i++) {
            var first = diagonals[i][0];
            var second = diagonals[i][1];
            var third = diagonals[i][2];
            var fourth = diagonals[i][3];

            if (
                slots.eq(first).hasClass(currentPlayer) &&
                slots.eq(second).hasClass(currentPlayer) &&
                slots.eq(third).hasClass(currentPlayer) &&
                slots.eq(fourth).hasClass(currentPlayer)
            ) {
                // console.log("Lyra is the winner 🤩");
                return true;
            }
        }
        return false;
    }

    function checkForVictory(slots) {
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter >= 4) {
                    return true;
                }
            } else {
                counter = 0;
            }
        }
    }
    function resetGame() {
        var answer = confirm("🌚 Do you want to play another round? 🌝");
        if (answer) {
            window.location.reload();
        } else {
            return;
        }
    }
})([
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
]);

// TO DO's:
//make horizontal and diagonal victory
//list of slots, make an array
//provide checkForVictory function
//var slot3 = slots.eq(3);
//Use location.reload(); to reload, take care of the flash
//remove classes from all slots
//create modals
//@keyframe animation
