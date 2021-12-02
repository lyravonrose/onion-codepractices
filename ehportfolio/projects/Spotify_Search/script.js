(function () {
    $("#submit-btn").on("click", function () {
        var userInput = $("input[name=user-input]").val(); //value of input
        var albumOrArtist = $("select").val(); //value of select
        // console.log(
        //     "user clicked and wants info for:",
        //     userInput,
        //     "type:",
        //     albumOrArtist
        // );
        // now we know what the user wants results for
        //time to talk to spotify api (aka our proxy) to get some results
        var nextUrl;

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (data) {
                console.log("response from the API", data);
                var response = data.artists || data.albums;
                //if user searched for artist,
                // the left hand side will be truthy, response will therefore
                // evaluate to that, if the user searched for album the left
                // hand side of || will be falsey, and the value will equate
                // to the right hand side!
                var myHtml = "";
                // things we are interested in to compose the html
                // are inside of our objects, in the items array!
                console.log("response:", response);
                if (response.items.length > 0) {
                    myHtml += "<h4>" + "Results for " + userInput + "</h4>";
                } else {
                    myHtml += "<h4>No Results</h4>";
                }
                for (var i = 0; i < response.items.length; i++) {
                    // console.log("name of artist: ", response.items[i].name);
                    // console.log("artist object:", response.items[i]);
                    // additionally we'll be interested in
                    // the external_urls value of the spotify property
                    // and we'll also want to get our image information
                    var imgUrl = "emperors.jpeg";
                    //if there is an image we want to reassign imgUrls value to THAT url instead of our default.jpg;
                    if (response.items[i].images.length > 0) {
                        console.log("artist has image", response.items[i]);
                        imgUrl = response.items[i].images[0].url;
                    }
                    console.log(imgUrl);
                    myHtml +=
                        '<div><a href="' +
                        response.items[i].external_urls.spotify +
                        '"><img src="' +
                        imgUrl +
                        '"/>' +
                        "<span>" +
                        response.items[i].name +
                        "</span></a></div>";
                }

                // put the html we generated on screen
                $("#results-container").html(myHtml);
                // understand if there is more results to get
                // and IF so, replace the spotify url with our proxy value

                nextUrl =
                    response.next &&
                    response.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );

                function checkScrollPs() {
                    var hasScrolledToBottom =
                        $(window).height() + $(document).scrollTop() ===
                        $(document).height();

                    if (hasScrolledToBottom === true) {
                        $("#more-btn").css({ visibility: "visible" });
                    } else {
                        $("#more-btn").css({ visibility: "hidden" });
                    }
                }

                $(document).on("scroll", function () {
                    checkScrollPs();
                });

                $("#more-btn").on("click", function () {
                    $.ajax({
                        url: nextUrl,
                        method: "GET",
                        data: {
                            query: userInput,
                            type: albumOrArtist,
                        },
                        success: function (data) {
                            console.log("Response from the API", data);
                            var response = data.artists || data.albums;

                            var myHtml = "";

                            console.log("response:", response);
                            if (response.items.length > 0) {
                                myHtml +=
                                    "<h4>" +
                                    "Results for " +
                                    userInput +
                                    "</h4>";
                            } else {
                                myHtml += "<h4>No Results</h4>";
                            }
                            for (var i = 0; i < response.items.length; i++) {
                                var imgUrl = "emperors.jpeg";

                                if (response.items[i].images.length > 0) {
                                    console.log(
                                        "artist has image",
                                        response.items[i]
                                    );
                                    imgUrl = response.items[i].images[0].url;
                                }
                                console.log(imgUrl);
                                myHtml +=
                                    '<div><a href="' +
                                    response.items[i].external_urls.spotify +
                                    '"><img src="' +
                                    imgUrl +
                                    '"/>' +
                                    "<span>" +
                                    response.items[i].name +
                                    "</span></a></div>";
                            }

                            $("#results-container").append(myHtml);

                            nextUrl =
                                response.next &&
                                response.next.replace(
                                    "api.spotify.com/v1/search",
                                    "spicedify.herokuapp.com/spotify"
                                );
                            console.log("nextUrl:", nextUrl);

                            // IF nextUrl is not null, we want to show the more button
                            // IF nextUrl is null, we want to hide the more btn!
                            if (nextUrl !== null) {
                                $("#more-btn").css({ visibility: "visible" });
                            } else {
                                $("#more-btn").css({ visibility: "hidden" });
                            }
                        },
                    });
                }); //more
            }, //success
        }); //ajax
    }); //submit
})(); //iife
