(function () {
    console.log("yup you are good to write some logic");
    var btn = document.getElementById("btn");
    var input = document.querySelector("input");
    var box = document.getElementById("box");
    // recoginise a simple button click
    btn.addEventListener("click", function (evt) {
        console.log("user clicked on button 🕊");
        console.log("evt", evt);
        //to prevent bubbling behavior, triggering any other clickhandler on any parent element
        // we need to stopPropagation
        evt.stopPropagation();
    }); //callback function

    //recognide box click
    box.addEventListener("click", function () {
        console.log("user clicked on box we want to make it round");
        box.style.borderRadius = "50%";
    });
    // recognise when the user presses a key
    document.addEventListener("keydown", function (evt) {
        // console.log("the user pressed some key on the keyboard");
        // console.log("evt: ", evt.keyCode);
        // if the user presses M
        if (evt.keyCode === 77) {
            // console.log("you pressed M")
            document.body.style.backgroundColor = "peachpuff";
            box.style.backgroundColor = "yellow";
        } else {
            //console.log("you pressed something other than M")
            document.body.style.backgroundColor = "lightblue";
        }
    });
    input.addEventListener("input", function (evt) {
        console.log("input happening...");
        console.log("what the user typed: ", evt.target.value);
    });
})(); //iife(immediately invoked function)
