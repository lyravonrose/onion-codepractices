/* 
1. input event:: we should get a list of countries that match the users input never more than four.
    understand wha tthe user is typing
    check against a list of countries for matches
        put up to four countries that match the user input on screen
        If there are no matches or the user typed gibberish, there should be a message "no results"
        If the input field is emtpy there should be  n countries shown

*/

(function () {
    var searchField = $("input");
    var resultsContainer = $(".results");
    var matchResults = [];

    searchField.on("input", function () {
        // console.log("user is typing");
        var inputVal = searchField.val().toLowerCase();
        // console.log("user is typing the following: ", inputVal);
        // for (var i = 0; i < countries.length; i++) {
        //     var lowerCaseCountry = countries[i].toLowerCase();
        //     if (lowerCaseCountry.indexOf(inputVal) === 0) {
        //         console.log(countries[i]);
        //         matchResults.push(countries[i]);
        // if (matchResults.length === 4) {
        //     console.log("list is full");
        //     break;
        //     // }
        // }
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputVal,
            },
            success: function (data) {
                if (searchField.val() === inputVal) {
                    console.log("response: ", data);
                } else {
                    console.log("No Results");
                }
                var htmlForCountries = "";

                for (var j = 0; j < data.length; j++) {
                    htmlForCountries +=
                        "<p class='country'>" + data[j] + "</p>";
                }

                if (matchResults.length === 0 && inputVal >= 1) {
                    searchField.css({ color: "darkgrey" }).html("No Results!");
                }
                resultsContainer.html(htmlForCountries);
            },
        });
    });

    // 2. mouseover event: when the user mouses over a country, this country should be given a visual highlight.
    //         add a highlight class to css
    //         remove highlight class from any country that might have it
    //         when the mouse is on a specific country, we should give it the highlight class
    //         problem to think of : the countries are NOT in the page on load, so need to think about event delegation somehow.

    resultsContainer.on("mouseover", function (evt) {
        // console.log("user is mousing over a country");
        htmlForCountries.removeClass("highlight");
        $(evt.currentTarget).css({ color: "crimson" }).addClass("highlight");
    });

    // 3. mousedown event: when the user clicks on a country that country should be put unto the input field.
    // set the input field value to whatever the user clicked on also hide the list of countries.

    resultsContainer.on("mousedown", function (evt) {
        $(evt.currentTarget).on("input");
    });

    searchField.on("click", function () {
        if (inputVal.length === 0) {
            resultsContainer.css({ visibility: "hidden" });
        }
    });

    // 4. keydown (unfinished)
    //     allow my users to naviagate the list of resulting countries via their keyboard.
    //     1) down arrow key(40)
    //         IF the last country in the list has the highlight class , do nothing
    //         IF any other country has the highlight class, we want to remove the highlight class from the one that has it and add the highlight class to the next element
    //     2) up arrow key(38)
    //         IF no country has the hight class, add it to the last one
    //         IF the first country in the list has the highlight class, do nothing
    //         IF any other country has the highlight class we want to remove the hightlight class form the one that has it, adn add the highlight class tot the prev element
    //         IF no country has the highlight class, add it to the first one
    //     3) enter key (13)
    //         same as mousedown check your code and just do the same here!
    //         set the input field value to whatever had the hightlight class when the user hit enter
    //         also hide the list of countries

    // searchField.on("keydown", function (evt) {
    //     if (evt.keyCode === 40) {
    //         matchResults.eq(0).addClass("highlight");
    //     } else if (evt.keyCode === 38) {
    //         matchResults.eq(0).addClass("highlight");
    //     } else if (evt.keyCode === 13) {
    //     }
    // });

    // 5. focus: show the results for the input currently in the input field (very similar to input event)

    searchField.on("focus", function () {
        resultsContainer.css({ visibility: "visible" });
    });

    // 6. blur: hide the list of countries!

    searchField.on("blur", function () {
        resultsContainer.css({ visibility: "hidden" });
    });
})();
